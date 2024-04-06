import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { lazy } from 'react';
import { BackgroundGradient } from "./ui/BackgroundGradient.tsx"; // Update the import path accordingly
import OurPortfolio from "../Page/OurPortfolio.js";
const Portfolio = lazy( ()=> import("../Page/OurPortfolio.js"));

export function AboutUsCardDemo() {
  return (
    <div id="AboutUs">
      <BackgroundGradient className="rounded-lg border border-gray-300 dark:border-gray-700 p-4 sm:p-10 bg-white dark:bg-black ">

        <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 underline">About Us</h2>
          <p className="text-base sm:text-lg text-black mt-2 mb-4 dark:text-neutral-200">
            At "Empower U," we are a dedicated collective of visionaries stemming from the dynamic cross-campus capstone classroom at York University, known affectionately as the C4 course. United by our passion and commitment to fostering social change, our team of nine is on a mission to empower at-risk youth by unlocking their entrepreneurial potential. We believe in the transformative power of education, innovation, and community engagement to create a brighter, more sustainable future.
          </p>
          <p className="text-base sm:text-lg text-black mt-2 mb-4 dark:text-neutral-200">
            We're more than just a group of students from York University; we're mentors, innovators, and advocates for a sustainable future. We're here to offer guidance, support, and the resources necessary for young entrepreneurs to thrive. Join us in our journey to empower the youth, one idea at a time, shaping a future where business and sustainability go hand in hand.
          </p>
          
          <Link to="/OurPortfolio" className="rounded-full px-4 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-sm font-bold dark:bg-zinc-800">
            learn more
          </Link>
          
        </div>
        <Routes>
          <Route path="/OurPortfolio" element={<OurPortfolio />} />
        </Routes>
      </BackgroundGradient>
    </div>
  );
}

export default AboutUsCardDemo;
