import { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

declare global {
  interface Window {
    paypal?: any;
  }
}

interface PayPalButtonProps {
  amount: number;
  enrollmentId: string;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export function PayPalButton({ amount, enrollmentId, onSuccess, onError }: PayPalButtonProps) {
  const updateEnrollment = useMutation(api.enrollments.updatePayPalInfo);

  useEffect(() => {
    if (!window.paypal) {
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_SANDBOX_CLIENT_ID&currency=USD";
      script.async = true;
      script.onload = () => {
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: amount.toString()
                  },
                  custom_id: enrollmentId // This will be passed to the webhook
                }]
              });
            },
            onApprove: async (data: any, actions: any) => {
              try {
                const order = await actions.order.capture();
                console.log("PayPal order captured:", order);
                
                // Update enrollment with PayPal transaction ID
                await updateEnrollment({
                  enrollmentId,
                  paypalPaymentId: order.id,
                  paymentStatus: "processing"
                });

                onSuccess();
              } catch (error) {
                console.error("PayPal capture error:", error);
                onError(error instanceof Error ? error : new Error("Payment failed"));
              }
            },
            onError: (err: Error) => {
              console.error("PayPal error:", err);
              onError(err);
            }
          }).render("#paypal-button-container");
        }
      };
      document.body.appendChild(script);
    }
  }, [amount, enrollmentId, onSuccess, onError, updateEnrollment]);

  return <div id="paypal-button-container"></div>;
}