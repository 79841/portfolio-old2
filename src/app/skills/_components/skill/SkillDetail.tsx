"use client";
import React from "react";
import { useSelectedSkillContext } from "./contexts/selected-skill";
import { ImageBox } from "@/components/image-box";
import { ProficiencyBar } from "@/components/proficiency-bar";

export const SkillDetail = () => {
  const selectedSkill = useSelectedSkillContext();
  if (selectedSkill === null) return null;

  return (
    <div className="absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center gap-2">
      <ImageBox src={selectedSkill.defaultImage} alt={selectedSkill.name} />
      <ProficiencyBar
        name={selectedSkill.name}
        proficiency={selectedSkill.proficiency}
      />
      <div></div>
    </div>
  );
};
