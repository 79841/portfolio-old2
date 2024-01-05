import { cn } from "@/lib/utils";
import React from "react";
import { TSkillCategory } from "@/types/Skill";
import {
  useSelectedSkillCategoryContext,
  useSelectedSkillCategoryDispatchContext,
} from "../../_contexts/selected-skill-category";
import { SelectedMark } from "@/components/selected-mark";

type TSkillCategoryProps = {
  skillCategory: TSkillCategory;
};
export const SkillCategory = ({ skillCategory }: TSkillCategoryProps) => {
  const selectedSkillCategory = useSelectedSkillCategoryContext();
  const { selectSkillCategory, unselectSkillCategory } =
    useSelectedSkillCategoryDispatchContext();

  const isSelected = selectedSkillCategory === skillCategory.name;

  const handleClick = () => {
    if (isSelected) unselectSkillCategory();
    else selectSkillCategory(skillCategory.name);
  };

  return (
    <div className="group">
      <div
        className={cn(
          "flex items-end justify-end text-right hover:font-semibold",
          isSelected && "font-semibold",
        )}
        onClick={handleClick}
      >
        <SelectedMark isSelected={isSelected}>
          {skillCategory.name}
        </SelectedMark>
      </div>
    </div>
  );
};
