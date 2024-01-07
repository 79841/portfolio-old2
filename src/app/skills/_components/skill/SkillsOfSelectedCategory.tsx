import { skillsData } from "@/data";
import React from "react";
import { useSelectedSkillCategoryContext } from "../../_contexts/selected-skill-category";
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
  if (skills.length > 0) return null;
  return <SkillList key={name} skills={skills} />;
};
