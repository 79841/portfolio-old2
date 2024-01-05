"use client";
import { experiencesData } from "@/data";
import { useStaggerShowUpBoxes } from "@/hooks/useStaggerShowUpBoxes";
import React from "react";
import { Experience } from "./Experience";

export const ExperienceList = () => {
  const [scope, BoxWrapper] = useStaggerShowUpBoxes();
  return (
    <div ref={scope} className="flex flex-col items-end">
      {experiencesData.map((experience) => (
        <BoxWrapper key={experience.title}>
          <Experience experience={experience} />
        </BoxWrapper>
      ))}
    </div>
  );
};
