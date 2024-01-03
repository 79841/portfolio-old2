import { TSkillCategory } from "@/types/Skill";
import React, { PropsWithChildren, useReducer } from "react";
import {
  SelectedSkillCategoryContext,
  SelectedSkillCategoryDispatchContext,
  TSelectedSkillCategoryContext,
  TSelectedSkillCategoryDispatchContext,
} from ".";

type TAction =
  | { type: "SELECT"; skillCategory: TSkillCategory["name"] }
  | { type: "UNSELECT" };

const reducer = (state: TSelectedSkillCategoryContext, action: TAction) => {
  switch (action.type) {
    case "SELECT":
      return action.skillCategory;
    case "UNSELECT":
      return null;
    default:
      return state;
  }
};

type TSelectedSkillCategoryContextProvider = PropsWithChildren;
export const SelectedSkillCategoryContextProvider = ({
  children,
}: TSelectedSkillCategoryContextProvider) => {
  const [selectedSkillCategory, dispatchSelectedSkillCategory] = useReducer(
    reducer,
    null,
  );
  const selectSkillCategory: TSelectedSkillCategoryDispatchContext["selectSkillCategory"] =
    (skillCategory: TSkillCategory["name"]) =>
      dispatchSelectedSkillCategory({ type: "SELECT", skillCategory });
  const unselectSkillCategory: TSelectedSkillCategoryDispatchContext["unselectSkillCategory"] =
    () => dispatchSelectedSkillCategory({ type: "UNSELECT" });

  return (
    <SelectedSkillCategoryContext.Provider value={selectedSkillCategory}>
      <SelectedSkillCategoryDispatchContext.Provider
        value={{ selectSkillCategory, unselectSkillCategory }}
      >
        {children}
      </SelectedSkillCategoryDispatchContext.Provider>
    </SelectedSkillCategoryContext.Provider>
  );
};
