import React from "react";
import Header from "./components/Header"; // Import the Header component
import HeroSection from "./components/HeroSection"; // Import the HeroSection component
import FeaturesSection from "./components/FeaturesSection"; // Import the FeaturesSection component
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css"; // Import global styles

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
