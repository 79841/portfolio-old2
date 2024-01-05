"use client";
import { TExperienceData } from "@/types/Experience";
import React, { PropsWithChildren, useReducer } from "react";
import {
  SelectedExperienceContext,
  SelectedExperienceDispatchContext,
  TSelectedExperienceContext,
  TSelectedExperienceDispatchContext,
} from ".";

type TAction =
  | { type: "SELECT"; experience: TExperienceData }
  | { type: "UNSELECT" };

const reducer = (state: TSelectedExperienceContext, action: TAction) => {
  switch (action.type) {
    case "SELECT":
      return action.experience;
    case "UNSELECT":
      return null;
    default:
      return state;
  }
};

type TSelectedExperienceContextProvider = PropsWithChildren;
export const SelectedExperienceContextProvider = ({
  children,
}: TSelectedExperienceContextProvider) => {
  const [selectedExperience, dispatchSelectedExperience] = useReducer(
    reducer,
    null,
  );
  const selectExperience: TSelectedExperienceDispatchContext["selectExperience"] =
    (experience: TExperienceData) =>
      dispatchSelectedExperience({ type: "SELECT", experience });
  const unselectExperience: TSelectedExperienceDispatchContext["unselectExperience"] =
    () => dispatchSelectedExperience({ type: "UNSELECT" });

  return (
    <SelectedExperienceContext.Provider value={selectedExperience}>
      <SelectedExperienceDispatchContext.Provider
        value={{ selectExperience, unselectExperience }}
      >
        {children}
      </SelectedExperienceDispatchContext.Provider>
    </SelectedExperienceContext.Provider>
  );
};
