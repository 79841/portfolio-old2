"use client";
import {
  SkillCategories,
  SkillDetail,
  SkillsOfSelectedCategory,
} from "./_components/skill";
import { SelectedSkillContextProvider } from "./_components/skill/contexts/selected-skill";
import { SelectedSkillCategoryContextProvider } from "./_components/skill/contexts/selected-skill-category";

const Skills = () => {
  return (
    <SelectedSkillCategoryContextProvider>
      <SelectedSkillContextProvider>
        <div className="flex h-full w-full items-end justify-end">
          <div className="flex flex-col">
            <SkillsOfSelectedCategory />
            <SkillCategories />
          </div>
          <SkillDetail />
        </div>
      </SelectedSkillContextProvider>
    </SelectedSkillCategoryContextProvider>
  );
};

export default Skills;
