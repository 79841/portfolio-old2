import { TSkillData } from "@/types/Skill";
import React, { MouseEventHandler } from "react";
import {
  useSelectedSkillContext,
  useSelectedSkillDispatchContext,
} from "./contexts/selected-skill";
import { cn } from "@/lib/utils";

type TSkillProps = {
  skill: TSkillData;
};
export const Skill = ({ skill }: TSkillProps) => {
  const selectedSkill = useSelectedSkillContext();
  const { selectSkill, unselectSkill } = useSelectedSkillDispatchContext();
  const isSelected =
    selectedSkill !== null && selectedSkill.name === skill.name;
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    if (isSelected) unselectSkill();
    else selectSkill(skill);
  };
  return (
    <div
      className={cn(
        "text-sm hover:font-semibold",
        isSelected && "font-semibold",
      )}
      onClick={handleClick}
    >
      {skill.name}
    </div>
  );
};
