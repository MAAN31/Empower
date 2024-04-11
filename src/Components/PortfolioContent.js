import React from "react";
import { StickyScroll } from "./ui/stickyscroll.tsx";

const content = [
    {
        title: "Trials and Triumphs",
        description:
      "At the core of the Tommy Douglas Secondary School workshop was a strong emphasis on teamwork and collaboration. Right from the project's inception, team members synergized their efforts, brainstorming ideas and refining strategies collectively. This collaborative spirit fostered an environment where diverse perspectives were valued, ensuring that the project was not only comprehensive but also reflective of a broad range of insights.",
        content: (
          <h2 className="sticky top-0 w-full bg-white text-center py-2 font-bold text-xl z-10">
            Trials and Triumphs
          </h2>
        ),
      },
  {
    title: "Team Collaboration:",
    description:
      "At the core of the Tommy Douglas Secondary School workshop was a strong emphasis on teamwork and collaboration. Right from the project's inception, team members synergized their efforts, brainstorming ideas and refining strategies collectively. This collaborative spirit fostered an environment where diverse perspectives were valued, ensuring that the project was not only comprehensive but also reflective of a broad range of insights.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Team Collaboration:
      </div>
    ),
  },
  {
    title: "Dynamic Adaptation:",
    description:
      "As the project unfolded, it became evident that adaptability was key to overcoming challenges and seizing opportunities. With each twist and turn in our idea development process, the team demonstrated remarkable agility, swiftly adjusting our approach based on emerging feedback and evolving circumstances. This dynamic adaptation ensured that the project remained responsive to the needs of its stakeholders, maximizing its potential impact.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Effective Version Management:",
    description:
      "Navigating the iterative nature of the project required robust version management capabilities. With multiple iterations and refinements being made, it was crucial to maintain clarity and consistency across all project materials. Our platform provided a streamlined solution, allowing us to track changes in real-time and ensure that everyone was working with the most up-to-date information.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Effective Version Management:
      </div>
    ),
  },
  {
    title: "Continuous Innovation:",
    description:
      "Throughout the project lifecycle, innovation was a constant driving force. The team's collaborative efforts fueled a continuous flow of creative ideas and solutions, enabling us to overcome obstacles and push the boundaries of what was possible. By fostering an environment that encouraged experimentation and exploration, we were able to sustain momentum and keep the project's momentum moving forward.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Continuous Innovation:
      </div>
    ),
  },
  {
    title: "Empowering Youth:",
    description:
      "Ultimately, the success of the Tommy Douglas Secondary School workshop lay in its ability to empower youth to become agents of change in their communities. By engaging students in meaningful discussions around sustainable development goals and entrepreneurship, we inspired them to think critically, creatively, and empathetically about the world around them. The positive feedback we received from participants served as a testament to the workshop's impact, reinforcing our commitment to creating opportunities for young people to thrive and succeed.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Empowering Youth:
      </div>
    ),
  },
 
];
export function PortfolioContent() {
  return (
    <div className="p-10">
      {/* <h2 className="text-2xl font-bold mb-4">Trials and Triumphs</h2> */}
      <StickyScroll content={content} />
    </div>
  );
}
