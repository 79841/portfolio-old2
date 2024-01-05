"use client";
import {
  SkillCategories,
  SkillDetail,
  SkillsOfSelectedCategory,
} from "./_components/skill";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col">
        <SkillsOfSelectedCategory />
        <SkillCategories />
      </div>
      <SkillDetail />
    </>
  );
};

export default Skills;
