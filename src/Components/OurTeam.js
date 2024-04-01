"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards.tsx";
import Manav from '../Assets/manav.jpeg'; // Import the logo here
import Sareen from '../Assets/sareen.jpeg'; // Import the logo here
import Eagen from '../Assets/eagan.jpeg'; // Import the logo here
import ben from '../Assets/ben.jpeg'; // Import the logo here
import Douglas from '../Assets/douglas.jpeg'; // Import the logo here
import Roodaba from '../Assets/Roodaba.jpeg';
import Akul from '../Assets/akul.jpg';


export function OurTeam() {
  return (
    <div id = "OurTeam"className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-4 mb-4">
      <h1 className="text-3xl font-bold mb-8 underline ">Our Team</h1> {/* Add the heading */}
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
        name: "Name : Sareen Hasan",
        title: " Major : BCom Marketing",
      },
  {
    image: Manav,
    name: "Name : Manav Sharma",
    title: "Major : BA Computer Science",
  },
  {
    image: ben,
    name: "Name : Ben lam",
    title: "Major : BA Statistics",
  },
  {
    
    image: Eagen,
    name: "Name : Eagan Ooi",
    title: "Major : BA Kinesiology and Health Science",
  },
  {
    image: Douglas,
    name: "Name : Douglas Fong",
    title: "Major : Design",
  },
  {
    image: Roodaba,
    name: "Name : Roodaba Mir",
    title: "Major : BA Law and Society",
  },
  {
    image: Roodaba,
    name: "Name : Sheraz Chaudhary",
    title: "Major : BSc Computer Engineering",
  },
  {
    image: Akul,
    name: "Name: Akul Sareen",
    title: "Major : BSc Computer Science",
  },
  {
    image: Akul,
    name: "Name: Kainat Naz",
    title: "Major : BSc Biomedical Science",
  },
];

export default OurTeam;