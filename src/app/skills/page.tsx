"use client";
import {
  SkillCategories,
  SkillDetail,
  SkillsOfSelectedCategory,
} from "./_components/skill";

const Skills = () => {
  return (
    <main className="flex h-full w-full flex-col justify-between lg:justify-end">
      <SkillDetail />
      <div className="flex w-full justify-end lg:flex-col ">
        <SkillsOfSelectedCategory />
        <SkillCategories />
      </div>
    </main>
  );
};

export default Skills;
