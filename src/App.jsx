import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="min-h-screen"></div>
    </main>
  );
};

export default App;
