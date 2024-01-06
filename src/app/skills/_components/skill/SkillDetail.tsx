"use client";
import React from "react";
import { useSelectedSkillContext } from "../../_contexts/selected-skill";
import { ProficiencyBar } from "@/components/proficiency-bar";
import { DetailBox } from "@/components/detail-box";
import { SkillImage } from "./SkillImage";

export const SkillDetail = () => {
  const selectedSkill = useSelectedSkillContext();
  if (selectedSkill === null) return null;

  return (
    <DetailBox>
      <SkillImage skill={selectedSkill} />
      <ProficiencyBar
        name={selectedSkill.name}
        proficiency={selectedSkill.proficiency}
      />
      <div className="my-2 flex w-96 justify-center text-sm">
        {selectedSkill.proficiencyDetail}
      </div>
    </DetailBox>
  );
};
