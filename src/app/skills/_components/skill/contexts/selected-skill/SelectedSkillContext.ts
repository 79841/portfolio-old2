import { TSkillData } from "@/types/Skill";
import { createContext, useContext } from "react";

export type TSelectedSkillContext = TSkillData | null;
export type TSelectedSkillDispatchContext = {
  selectSkill: (skill: TSkillData) => void;
  unselectSkill: () => void;
};

export const SelectedSkillContext = createContext<TSelectedSkillContext>(null);
export const SelectedSkillDispatchContext =
  createContext<TSelectedSkillDispatchContext>({
    selectSkill() {},
    unselectSkill() {},
  });

export const useSelectedSkillContext = () => useContext(SelectedSkillContext);
export const useSelectedSkillDispatchContext = () =>
  useContext(SelectedSkillDispatchContext);
