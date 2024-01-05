import { TSkillData } from "@/types/Skill";
import React, { MouseEventHandler } from "react";
import {
  useSelectedSkillContext,
  useSelectedSkillDispatchContext,
} from "../../_contexts/selected-skill";
import { cn } from "@/lib/utils";
import { SelectedMark } from "@/components/selected-mark";

type TSkillProps = {
  skill: TSkillData;
};
export const Skill = ({ skill }: TSkillProps) => {
  const selectedSkill = useSelectedSkillContext();
  const { selectSkill, unselectSkill } = useSelectedSkillDispatchContext();
  const isSelected =
    selectedSkill !== null && selectedSkill.name === skill.name;
  const handleClick: MouseEventHandler<HTMLSpanElement> = () => {
    if (isSelected) unselectSkill();
    else selectSkill(skill);
  };
  return (
    <SelectedMark isSelected={isSelected}>
      <span className={cn("text-sm hover:font-semibold")} onClick={handleClick}>
        {skill.name}
      </span>
    </SelectedMark>
  );
};
