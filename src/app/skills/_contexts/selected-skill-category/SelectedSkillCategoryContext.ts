"use client";
import { TSkillCategory } from "@/types/Skill";
import { createContext, useContext } from "react";

export type TSelectedSkillCategoryContext = TSkillCategory["name"] | null;
export type TSelectedSkillCategoryDispatchContext = {
  selectSkillCategory: (skillCategory: TSkillCategory["name"]) => void;
  unselectSkillCategory: () => void;
};

export const SelectedSkillCategoryContext =
  createContext<TSelectedSkillCategoryContext>(null);
export const SelectedSkillCategoryDispatchContext =
  createContext<TSelectedSkillCategoryDispatchContext>({
    selectSkillCategory() {},
    unselectSkillCategory() {},
  });

export const useSelectedSkillCategoryContext = () =>
  useContext(SelectedSkillCategoryContext);
export const useSelectedSkillCategoryDispatchContext = () =>
  useContext(SelectedSkillCategoryDispatchContext);
