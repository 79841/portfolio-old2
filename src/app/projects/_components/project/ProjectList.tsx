"use client";
import { projectsData } from "@/data";
import React from "react";
import { Project } from "./Project";
import { SelectedMark } from "@/components/selected-mark";
import { useStaggerShowUpBoxes } from "@/hooks/useStaggerShowUpBoxes";

export const ProjectList = () => {
  const isSelected = false;
  const [scope, BoxWrapper] = useStaggerShowUpBoxes();
  return (
    <div ref={scope} className="flex flex-col items-end">
      {Object.values(projectsData).map((project) => (
        <BoxWrapper key={project.name}>
          <SelectedMark isSelected={isSelected}>
            <Project project={project} />
          </SelectedMark>
        </BoxWrapper>
      ))}
    </div>
  );
};
