import { TSkillData } from "@/types/Skill";
import React, { PropsWithChildren, useReducer } from "react";
import {
  SelectedSkillContext,
  SelectedSkillDispatchContext,
  TSelectedSkillContext,
  TSelectedSkillDispatchContext,
} from ".";

type TAction = { type: "SELECT"; skill: TSkillData } | { type: "UNSELECT" };

const reducer = (state: TSelectedSkillContext, action: TAction) => {
  switch (action.type) {
    case "SELECT":
      return action.skill;
    case "UNSELECT":
      return null;
    default:
      return state;
  }
};

type TSelectedSkillContextProvider = PropsWithChildren;
export const SelectedSkillContextProvider = ({
  children,
}: TSelectedSkillContextProvider) => {
  const [selectedSkill, dispatchSelectedSkill] = useReducer(reducer, null);
  const selectSkill: TSelectedSkillDispatchContext["selectSkill"] = (
    skill: TSkillData,
  ) => dispatchSelectedSkill({ type: "SELECT", skill });
  const unselectSkill: TSelectedSkillDispatchContext["unselectSkill"] = () =>
    dispatchSelectedSkill({ type: "UNSELECT" });

  return (
    <SelectedSkillContext.Provider value={selectedSkill}>
      <SelectedSkillDispatchContext.Provider
        value={{ selectSkill, unselectSkill }}
      >
        {children}
      </SelectedSkillDispatchContext.Provider>
    </SelectedSkillContext.Provider>
  );
};
