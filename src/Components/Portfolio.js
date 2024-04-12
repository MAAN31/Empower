"use client";
import React from "react";
import { WavyBackground } from "./ui/WavyBackground.tsx";
 
function Portfolio() {
  return (
    <WavyBackground className="relative max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-3xl lg:text-7xl text-white font-bold inter-var text-center">
      Empowering Future Leaders
      </p>
      <p className="text-base md:text-xl mt-4 text-white font-normal inter-var text-center">
        Take a deep dive into our journey
      </p>
     </WavyBackground>
  );
}

export default Portfolio;