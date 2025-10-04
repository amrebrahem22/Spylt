import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MessgaeSection from "./sections/MessgaeSection";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessgaeSection />
      <div className="min-h-screen"></div>
    </main>
  );
};

export default App;
