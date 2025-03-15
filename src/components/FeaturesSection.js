import React from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaGlobe,
  FaSchool,
  FaGraduationCap,
  FaUserGraduate,
} from "react-icons/fa";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {/* Section 1: Funding for International Students */}
      <div className="funding-section">
        <h2>Funding for Students</h2>
        <p>loerem ipsum</p>
        <div className="funding-grid">
          <div className="funding-card">
            <h3>Our Fastest Process Yet</h3>
            <p>
              In just 30 seconds, see if you’re eligible to apply. From our
              lightning-speed application process to our seamless disbursement,
              we have you covered.
            </p>
          </div>
          <div className="funding-card">
            <h3>Support Along the Way</h3>
            <p>
              Free visa support letters, exclusive career strategy services and
              the potential for a conditional loan offer in a matter of days.
            </p>
          </div>
          <div className="funding-card">
            <h3>Funding at Your Fingertips</h3>
            <p>
              Secure your loan faster than ever with MPOWER’s quickest
              application yet, available worldwide. Apply today for funding!
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: What We've Achieved Together */}
      <h2>What We've Achieved Together</h2>
      <div className="features-grid">
        <div className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3>100%</h3>
          <p>Digital loan application process</p>
        </div>
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3>20,000+</h3>
          <p>Students funded</p>
        </div>
        <div className="feature-card">
          <FaGlobe className="feature-icon" />
          <h3>190+</h3>
          <p>Eligible countries of citizenship</p>
        </div>
        <div className="feature-card">
          <FaSchool className="feature-icon" />
          <h3>500+</h3>
          <p>Eligible U.S. and Canadian schools</p>
        </div>
        <div className="feature-card">
          <FaGraduationCap className="feature-icon" />
          <h3>91%</h3>
          <p>
            Of students indicate an loan was instrumental in their ability to
            study abroad
          </p>
        </div>
        <div className="feature-card">
          <FaUserGraduate className="feature-icon" />
          <h3>45%</h3>
          <p>Of customers are first-generation college students</p>
        </div>
      </div>

      <div className="application-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>
          Start your application today and join thousands of students who have
          achieved their dreams with Financing.
        </p>
        <button className="application-button">Start Your Application</button>
      </div>

      {/* Section 3: Newsletter Signup */}
      <div className="newsletter-section">
        <h2>Sign up for our newsletter!</h2>
        <form className="newsletter-form">
          <div className="form-group">
            <input type="text" placeholder="First name" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="E-mail Address" required />
          </div>
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
        <p className="consent-message">
          By submitting your email address, you consent to receive email
          communication from US.
        </p>
      </div>

      {/* Section 4: Start Your Application */}
    </section>
  );
};

export default FeaturesSection;
