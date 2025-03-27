import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "./ask-gif.gif"; // Adjust the path to your PNG file
import "./HeroSection.css";
import "./ProfileBox.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="name-pic-container">
          <img src={profilePic} alt="Arshnoor Singh" className="profile-pic" />
          <h1>ARSHNOOR SINGH</h1>
        </div>
        <p>A Competent coder at your Service</p>

        <button
          className="cta-button"
          onClick={() => navigate("/about")} // Navigate to /about
        >
          About Me
        </button>
        <button
          className="cta-button"
          onClick={() => navigate("/projects")} // Navigate to /projects
        >
          Projects
        </button>
        <button
          className="cta-button"
          onClick={() => navigate("/experience")} // Navigate to /experience
        >
          Experience
        </button>
        <button
          className="cta-button"
          onClick={() => navigate("/education")} // Navigate to /education
        >
          Education
        </button>
        <button
          className="cta-button"
          onClick={() => navigate("/contact")} // Navigate to /contact
        >
          Contact
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
