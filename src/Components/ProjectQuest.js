"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/canvasReaveal.tsx";

export function ProjectQuest() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
    >
      <p className="md:text-2xl text-2xl font-medium text-left text-white relative z-20 max-w-2xl mx-auto">
      Unraveling the Quest:
      </p>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(1px,white,transparent)] bg-black" />
      <div className="text-white max-w-2xl mx-auto mt-8">
        <p className="text-white max-w-2xl mx-auto mt-3 text-sm leading-5 mb-3;">
        Our group tackled the challenge question by
          brainstorming unique ideas to gain different perspectives. We
          coordinated with our project sponsor Murwan Khogali, a youth
          outreach worker at Healing As One. He provided us with valuable
          insights that guided our quest for a solution to the given challenge.
        </p>
        <p className="text-white max-w-2xl mx-auto mt-3 text-sm leading-5 mb-3;">
          As a result, one of our group members suggested the idea of a
          workshop that teaches students the basics on how to create a business
          and allows them to create a hypothetical business themselves to help
          put it into practice. Other members suggested implementing global
          issues by requiring the embedding of sustainable development goals to
          their business idea, the goals we learned about in C4. Our workshop
          idea came to life when we put all our information and ideas together,
          and started contacting youth organizations, community centres, and
          schools, trying to decide where we should hold our workshop. We
          initiated contact with multiple high schools and community centres to
          find potential collaborators. We finally landed 2 event sponsors at
          Tommy Douglas.
        </p>
        <p className="text-white max-w-2xl mx-auto mt-3 text-sm leading-5 mb-3;">
          To prepare for the workshops we coordinated with the school staff to
          set up equipment and event supplies to provide students with a
          platform to engage in entrepreneurial creativity. The Event at Tommy
          Douglas was a 2 day event with the first day for generating creative
          and unique business solutions to any of the UN sustainable development
          goals (SDGs). On the second day the students had the opportunity to
          pitch their business solution to an audience and a chance to win a
          prize, a gift basket filled with chips, candy, and drinks.
        </p>
        <p className="text-white max-w-2xl mx-auto mt-3 text-sm leading-5 mb-3;">
          Alongside our development of a hands-on experiential based workshop
          we also developed a resource hub website so that we could leverage the
          skills of our team members in Computer Science. The website developed
          was a user-centric, responsive and interactive website that will serve
          as an excellent marketing and outreach tool to communicate our mission
          statement.
        </p>
      </div>
    </div>
  );
}
