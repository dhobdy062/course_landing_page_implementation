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
  };

  return (
    <>
      {/* Enrollment Form Section */}
      <section id="enrollment-section" className="enrollment-section">
        {showEnrollmentForm && !enrollmentComplete && (
          <EnrollmentForm onComplete={handleEnrollmentComplete} />
        )}
      </section>

      {/* Enrollment Confirmation Section */}
      {enrollmentComplete && (
        <section className="enrollment-confirmation">
          <h2>Thank You for Enrolling!</h2>
          <p>Your enrollment has been received. You will receive course access details via email shortly.</p>
        </section>
      )}

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
