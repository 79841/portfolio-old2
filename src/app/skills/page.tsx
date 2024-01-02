"use client";
import { skillsData } from "@/data";
import { cn } from "@/lib/utils";
import { TSkillCategory } from "@/types/Skill";
import { MouseEventHandler, useState } from "react";

const Skills = () => {
  const [selectedSkillCategory, setSelectedSkillCategory] =
    useState<TSkillCategory | null>(null);
  const handleClick = (skillCategory: TSkillCategory) => {
    if (selectedSkillCategory === skillCategory) setSelectedSkillCategory(null);
    else setSelectedSkillCategory(skillCategory);
  };
  return (
    <div className="flex">
      <div>
        {selectedSkillCategory !== null &&
          skillsData
            .filter((skill) => skill.category === selectedSkillCategory)[0]
            .skills.map((skill) => <div key={skill.name}>{skill.name}</div>)}
      </div>
      <div className="">
        {skillsData.map((skill) => (
          <div key={skill.category}>
            <div
              className={cn(
                "flex justify-end",
                selectedSkillCategory === skill.category && "font-semibold",
              )}
              onClick={() => handleClick(skill.category)}
            >
              {skill.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
