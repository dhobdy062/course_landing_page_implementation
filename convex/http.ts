import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/paypal-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    // Verify the request is from PayPal
    const paypalIpnUrl = process.env.CONVEX_ENV === "production" 
      ? "https://ipnpb.paypal.com/cgi-bin/webscr"
      : "https://ipnpb.sandbox.paypal.com/cgi-bin/webscr";

    // Get the raw body
    const rawBody = await request.text();
    
    // Verify with PayPal
    const verifyResponse = await fetch(paypalIpnUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `cmd=_notify-validate&${rawBody}`,
    });

    const verificationResult = await verifyResponse.text();
    
    if (verificationResult !== "VERIFIED") {
      return new Response("Invalid PayPal verification", { status: 400 });
    }

    // Parse the IPN message
    const formData = new URLSearchParams(rawBody);
    const paymentStatus = formData.get("payment_status");
    const paymentId = formData.get("txn_id");
    const customData = formData.get("custom"); // You can pass enrollment ID here
    const paymentAmount = formData.get("mc_gross");
    const paymentType = formData.get("txn_type");

    // Handle different payment statuses
    if (paymentStatus === "Completed") {
      // Update enrollment status
      await ctx.runMutation(internal.payments.updatePaymentStatus, {
        paypalPaymentId: paymentId!,
        status: "paid",
        amount: parseFloat(paymentAmount!),
        paymentDate: Date.now(),
      });

      // Send confirmation email with meeting password
      await ctx.runAction(internal.emails.sendPaymentConfirmation, {
        paypalPaymentId: paymentId!,
      });
    }

    return new Response("OK", { status: 200 });
  }),
});

export default http;
