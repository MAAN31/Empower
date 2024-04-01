"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import {GeminiEffect } from "./ui/geminiEffect.tsx";

export function OurMission() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.25], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.25], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.25], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.25], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.25], [0, 1.2]);

  return (
    <div id = "OurMission"
      className="h-[125vh] bg-black w-full  dark:border-white/[0.1] rounded-md relative pt-40 overflow-hidden"
      ref={ref}
    >
      <GeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}


export default OurMission;
