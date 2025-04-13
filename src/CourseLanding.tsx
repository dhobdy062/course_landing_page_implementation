import { useState } from "react";
import { EnrollmentForm } from "./EnrollmentForm";

export function CourseLanding() {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [enrollmentComplete, setEnrollmentComplete] = useState(false);

  const handleEnrollClick = () => {
    setShowEnrollmentForm(true);
    document.getElementById("enrollment-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEnrollmentComplete = () => {
    setEnrollmentComplete(true);
    setShowEnrollmentForm(false);
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Enrollment Form Section */}
      <section id="enrollment-section" className="enrollment-section">
        {showEnrollmentForm && !enrollmentComplete && (
          <EnrollmentForm onComplete={handleEnrollmentComplete} />
        )}
      </section>

      {/* Payment Section */}
      <section className="payment" id="pricing">
        <h2>Choose Your Payment Option</h2>
        {enrollmentComplete && (
          <>
            <div className="pricing-cards">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Installment Plan</h3>
                  <div className="price">$25<span>/installment</span></div>
                  <p>3 monthly payments</p>
                </div>
                <ul className="pricing-features">
                  <li>✅ All 3 live sessions</li>
                  <li>✅ Session recordings</li>
                  <li>✅ Course materials</li>
                  <li>✅ Email support</li>
                  <li>💰 $25 now + 2 monthly payments</li>
                </ul>
                <a
                  href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-1KV150647P276913SM7SBDSI"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay First Installment
                </a>
                <div className="pricing-note">
                  Next payments: May 16 & June 16
                </div>
              </div>
              
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Full Payment</h3>
                  <div className="price">$75<span> total</span></div>
                  <p>One-time payment</p>
                </div>
                <ul className="pricing-features">
                  <li>✅ All 3 live sessions</li>
                  <li>✅ Session recordings</li>
                  <li>✅ Course materials</li>
                  <li>✅ Email support</li>
                  <li>✅ Private Q&A access</li>
                </ul>
                <a
                  href="https://www.paypal.com/ncp/payment/S9YYCL6MYJED4"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay in Full
                </a>
              </div>
            </div>
            <div className="confirmation-message">
              Meeting password and access details will be sent after payment confirmation
            </div>
          </>
        )}
      </section>

      <section className="final-cta">
        <h2>Ready to Transform Your Business with AI?</h2>
        <p>Join hundreds of others who are already leveraging AI to work smarter, not harder.</p>
        <button onClick={handleEnrollClick} className="button button-large">Enroll Now</button>
        <div className="limited-spots">
          <span>⚠️ Only 50 spots available for live sessions</span>
        </div>
      </section>
    </>
  );
}
