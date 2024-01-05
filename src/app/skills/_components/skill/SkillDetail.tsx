"use client";
import React from "react";
import { useSelectedSkillContext } from "../../_contexts/selected-skill";
import { ImageBox } from "@/components/image-box";
import { ProficiencyBar } from "@/components/proficiency-bar";
import { DetailBox } from "@/components/detail-box";

export const SkillDetail = () => {
  const selectedSkill = useSelectedSkillContext();
  if (selectedSkill === null) return null;

  return (
    <DetailBox>
      <ImageBox src={selectedSkill.defaultImage} alt={selectedSkill.name} />
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
