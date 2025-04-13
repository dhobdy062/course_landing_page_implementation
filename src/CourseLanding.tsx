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
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <img src="Build_Happy_logo_wo_plaque.png" alt="Building Happy People with AI" className="logo" />
          <h1>Understanding AI: Empower Your Business &amp; Life</h1>
          <p className="hero-subtitle">
            3 Live Sessions to Master AI Prompting, Automation, and the Agentic Era—No Coding Required.
          </p>
          <div className="cta-primary">
            <button onClick={handleEnrollClick} className="button button-primary">Enroll Now</button>
          </div>
          <div className="trust-badge">
            <span>⭐ Trusted by 500+ small businesses</span>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://i.imgur.com/Y2h15C5.jpeg" alt="AI Training Workshop" />
        </div>
      </header>

      {/* Course Information */}
      <section className="course-info">
        <h2>Who is this course for?</h2>
        <div className="info-container">
          <div className="info-text">
            <p>
              Designed for solopreneurs and individuals just getting started with AI, 
              this course delivers practical tips and hacks you can use immediately.
            </p>
            <ul className="benefits">
              <li>💡 No technical background required</li>
              <li>🚀 Implement AI tools from day one</li>
              <li>💼 Perfect for small business owners, freelancers, and creators</li>
              <li>⏱️ Save 10+ hours weekly with AI automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Breakdown */}
      <section className="course-breakdown">
        <h2>Course Breakdown</h2>
        <div className="session">
          <div
            className="session-image-container"
            style={{
              display: "flex",
              flexDirection: "row",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              style={{
                width: '250px', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '10px',
              }}
            />

<img src="public/aisession1.png" alt="Session 1" style={{ width: '250px', height: '100%', objectFit: 'cover', borderRadius: '10px', position: 'absolute', right: 0 }} />

            
          <div className="session-content" style={{ flexGrow: "1" }}>
            <h3>Session 1: Speak AI—Mastering the Art of Prompt Engineering</h3>
            <p>
              Learn the fundamentals of prompt engineering and how to use proven frameworks to create content, 
              images, and even AI-driven applications.
            </p>
            <ul className="session-benefits">
              <li>Master the 5 core prompting frameworks</li>
              <li>Create content 5x faster than writing from scratch</li>
              <li>Generate professional-quality images with precise prompts</li>
            </ul>
            <div className="session-date">April 16, 2025 • 7:00 PM EST</div>
          </div>
        </div>
        </div>

        <div className="session">
          <div className="session-image-container" style={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                width: "100%",
              }}>
              <img
                  src="aisession2.png"
                  alt="Session 2"
                  style={{
                    width: "250px",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

            <div className="session-content" style={{flexGrow:"1"}}>
                <h3>Session 2: AI Time Savers—Automations That Multiply Your Productivity</h3>
              <p>
                Discover how to harness AI tools to automate content sharing, build webpages and dashboards, 
                and integrate AI into your workflow—all with no coding required.
              </p>
              <ul className="session-benefits">
                <li>Set up your first AI automation in under 10 minutes</li>
                <li>Create a content calendar that practically runs itself</li>
                <li>Build simple but powerful AI workflows for repetitive tasks</li>
              </ul>
              <div className="session-date">April 23, 2025 • 7:00 PM EST</div>
            </div>
          </div>
        </div>

        <div className="session" style={{position:"relative"}}>
          <div className="session-icon" style={{
            backgroundImage: `url('https://i.imgur.com/i1pYt9E.jpeg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '80px',
            height: '80px'
          }}></div>
          <div className="session-content">
            <h3>Session 3: The Agentic Era—Harnessing the Power of AI Agents</h3>
             <img
              src="public/class-session3.png"
              alt="Session 3"
              style={{
                width: "250px",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                position: 'absolute',
                left: 0
              }}
            />
            <p>
              Explore the transformative power of AI agents, learn how to build an AI for your business 
              or as a personal assistant, and leverage these tools for enhanced productivity.
            </p>
            <ul className="session-benefits">
              <li>Create your first custom AI agent without coding</li>
              <li>Set up collaborative AI systems that work while you sleep</li>
              <li>Future-proof your business with agentic AI strategies</li>
            </ul>
            <div className="session-date">April 30, 2025 • 7:00 PM EST</div>
          </div>
        </div>
      </section>

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
                  <h3>Monthly Plan</h3>
                  <div className="price">$25<span>/month</span></div>
                  <p>3-month commitment</p>
                </div>
                <ul className="pricing-features">
                  <li>✅ All 3 live sessions</li>
                  <li>✅ Session recordings</li>
                  <li>✅ Course materials</li>
                  <li>✅ Email support</li>
                </ul>
                <a
                  href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-1KV150647P276913SM7SBDSI"
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Monthly Plan
                </a>
              </div>
              
              <div className="pricing-card featured">
                <div className="best-value">BEST VALUE</div>
                <div className="pricing-header">
                  <h3>Pay in Full</h3>
                  <div className="price">$75<span>/one-time</span></div>
                  <p>Save $25 compared to monthly</p>
                </div>
                <ul className="pricing-features">
                  <li>✅ All 3 live sessions</li>
                  <li>✅ Session recordings</li>
                  <li>✅ Course materials</li>
                  <li>✅ Email support</li>
                  <li>✅ BONUS: Private Q&A</li>
                </ul>
                <a
                  href="https://www.paypal.com/ncp/payment/S9YYCL6MYJED4"
                  className="button button-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pay in Full & Save
                </a>
              </div>
            </div>
            <div className="confirmation-message">
              Meeting password will be included in an email after payment confirmation
            </div>
          </>
        )}
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Do I need any technical experience?</h3>
          <p>None at all! This course is specifically designed for beginners with zero coding experience.</p>
        </div>
        <div className="faq-item">
          <h3>Will I have access to recordings?</h3>
          <p>Yes, all sessions are recorded and available for 12 months after the course ends.</p>
        </div>
        <div className="faq-item">
          <h3>What if I can't attend live?</h3>
          <p>No problem! You'll have access to all recordings and can submit questions in advance.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a money-back guarantee?</h3>
          <p>Absolutely. If you're not satisfied after the first session, we offer a full refund.</p>
        </div>
      </section>

      <section className="final-cta">
        <h2>Ready to Transform Your Business with AI?</h2>
        <p>Join hundreds of others who are already leveraging AI to work smarter, not harder.</p>
        <button onClick={handleEnrollClick} className="button button-large">Enroll Now</button>
        <div className="limited-spots">
          <span>⚠️ Only 50 spots available for live sessions</span>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="Build_Happy_logo_wo_plaque.png" alt="Building Happy People with AI" className="footer-logo-img" />
            <p>Building Happy People with AI</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Twitter"><span>𝕏</span></a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Building Happy People with AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
