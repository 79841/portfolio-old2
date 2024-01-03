import { skillsData } from "@/data";
import React from "react";
import { useSelectedSkillCategoryContext } from "./contexts/selected-skill-category";
import { TSkillCategory } from "@/types/Skill";
import { SkillList } from "./SkillList";

export const SkillsOfSelectedCategory = () => {
  const selectedSkillCategory = useSelectedSkillCategoryContext();
  const { name, skills } =
    selectedSkillCategory !== null
      ? skillsData.filter(
          (skillCategory: TSkillCategory) =>
            skillCategory.name === selectedSkillCategory,
        )[0]
      : { name: null, skills: [] };
  return <>{skills.length > 0 && <SkillList key={name} skills={skills} />}</>;
};
