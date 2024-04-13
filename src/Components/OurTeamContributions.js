"use client";

import React, { useEffect, useState } from "react";
import { InfiniteCards } from "./ui/infinitecards.tsx";
import Manav from '../Assets/manav.jpeg'; // Import the logo here
import Sareen from '../Assets/sareen.jpeg'; // Import the logo here
import Eagen from '../Assets/eagan.jpeg'; // Import the logo here
import ben from '../Assets/ben.jpeg'; // Import the logo here
import Douglas from '../Assets/douglas.jpeg'; // Import the logo here
import Roodaba from '../Assets/Roodaba.jpeg';
import Akul from '../Assets/akul.jpg';


export function Contributions() {
  return (
    <div id = "Contributions"className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-4 mb-4">
      <h1 className="text-3xl font-bold mb-8 underline ">Our Team</h1> {/* Add the heading */}
      <InfiniteCards
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
        title: "A Marketing Major, played a pivotal role in bringing our workshop to life through her creative touch. She applied her experience to craft engaging posters and marketing materials that captured the essence of our project.",
      },
  {
    image: Manav,
    name: "Name : Manav Sharma",
    title: "a Computer Science major who took advantage of his expertise and experience to develop an informative website. Focusing on responsive design and an intuitive user interface, he ensured a seamless user experience. ",
  },
  {
    image: ben,
    name: "Name : Ben lam",
    title: "a Statistics Major, leveraged statistical techniques to design a comprehensive survey and conduct analyses to extract valuable insights from the workshop. Additionally, he contributed to the development of the project’s information booklet, translating mathematical concepts into accessible content for our audience. ",
  },
  {
    
    image: Eagen,
    name: "Name : Eagan Ooi",
    title: "Eagan, a Kinesiology major with a coaching background, led our workshops, connecting with students and providing guidance. He also played a key role in organizing and completing our group's business template, which students relied on during the workshop.",
  },
  {
    image: Douglas,
    name: "Name : Douglas Fong",
    title: "Douglas, a Design major with a passion for videography, served as our official video producer and editor. He played a pivotal role in directing, recording, and editing our videos, contributing significantly to our project's success. Additionally, Douglas utilized his design expertise to assist with logo creation.",
  },
  {
    image: Roodaba,
    name: "Name : Roodaba Mir",
    title: "A Law and Society major, significantly contributed as a content editor and writer, shaping much of our project. She played a key role in crafting workshop materials, including our business booklet and template, providing valuable resources for student engagement and success.",
  },
  {
    image: Roodaba,
    name: "Name : Sheraz Chaudhary",
    title: "an engineering student, served as a workshop advisor, offering guidance to grade 12 students entering university. Drawing from his university experience, he provided valuable input for our projects, including website and workshop design.",
  },
  {
    image: Akul,
    name: "Name: Akul Sareen",
    title: "Computer Science major who applied his knowledge of various computer programs to adjust and optimize our website to improve its appearance. Additionally, he utilized online tools to facilitate teamwork in content writing.",
  },
  {
    image: Akul,
    name: "Name: Kainat Naz",
    title: "a Biomedical Science major, spearheaded communication with key stakeholders, managed meetings, and organized workshops. She also oversaw project finances, allocating funds strategically.",
  },
];

export default Contributions;