import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects"; // Import the Projects component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />{" "}
        {/* Add Projects route */}
      </Routes>
    </Router>
  );
};

export default App;
