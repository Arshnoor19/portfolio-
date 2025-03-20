import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import "./ProfileBox.css";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>ARSHNOOR SINGH</h1>
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

        <button className="cta-button">Experience</button>
        <button className="cta-button">Education</button>
        <button className="cta-button">Contact</button>
      </div>
    </section>
  );
};

export default HeroSection;
