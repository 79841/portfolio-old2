"use client";
import React from "react";
import { useSelectedSkillContext } from "../../_contexts/selected-skill";
import { ProficiencyBar } from "@/components/proficiency-bar";
import { DetailBox } from "@/components/detail-box";
import { SkillImage } from "./SkillImage";

export const SkillDetail = () => {
  const selectedSkill = useSelectedSkillContext();
  const isVisible = selectedSkill !== null;

  return (
    <DetailBox>
      {isVisible && (
        <>
          <SkillImage skill={selectedSkill} />
          <ProficiencyBar
            name={selectedSkill.name}
            proficiency={selectedSkill.proficiency}
          />
          <div className="my-2 flex justify-center text-sm">
            {selectedSkill.proficiencyDetail}
          </div>
        </>
      )}
    </DetailBox>
  );
};
