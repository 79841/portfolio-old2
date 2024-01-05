"use client";
import { TExperienceData } from "@/types/Experience";
import { createContext, useContext } from "react";

export type TSelectedExperienceContext = TExperienceData | null;
export type TSelectedExperienceDispatchContext = {
  selectExperience: (experience: TExperienceData) => void;
  unselectExperience: () => void;
};

export const SelectedExperienceContext =
  createContext<TSelectedExperienceContext>(null);
export const SelectedExperienceDispatchContext =
  createContext<TSelectedExperienceDispatchContext>({
    selectExperience() {},
    unselectExperience() {},
  });

export const useSelectedExperienceContext = () =>
  useContext(SelectedExperienceContext);
export const useSelectedExperienceDispatchContext = () =>
  useContext(SelectedExperienceDispatchContext);
