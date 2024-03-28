"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards.tsx";
import Manav from '../Assets/manav.jpeg'; // Import the logo here
import Sareen from '../Assets/sareen.jpeg'; // Import the logo here
import Eagen from '../Assets/eagan.jpeg'; // Import the logo here
import ben from '../Assets/ben.jpeg'; // Import the logo here
import Douglas from '../Assets/douglas.jpeg'; // Import the logo here
import Roodaba from '../Assets/Roodaba.jpeg';


export function OurTeam() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-8">
      <h1 className="text-3xl font-bold mb-8">Our Team</h1> {/* Add the heading */}
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
        image: Sareen, // Use the imported logo image
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
      },
  {
    image: Manav,
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    image: ben,
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    
    image: Eagen,
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    image: Douglas,
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    image: Roodaba,
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default OurTeam;