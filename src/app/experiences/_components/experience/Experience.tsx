import { SelectedMark } from "@/components/selected-mark";
import { TExperienceData } from "@/types/Experience";
import React, { MouseEventHandler } from "react";
import {
  useSelectedExperienceContext,
  useSelectedExperienceDispatchContext,
} from "../../_contexts/selected-experience";

type TExperienceProps = {
  experience: TExperienceData;
};
export const Experience = ({ experience }: TExperienceProps) => {
  const selectedExperience = useSelectedExperienceContext();
  const { selectExperience, unselectExperience } =
    useSelectedExperienceDispatchContext();
  const isSelected = selectedExperience?.title === experience.title;

  const handleClick: MouseEventHandler<HTMLSpanElement> = () => {
    if (isSelected) unselectExperience();
    else {
      selectExperience(experience);
    }
  };
  return (
    <SelectedMark isSelected={isSelected}>
      <span onClick={handleClick} className="hover:font-semibold">
        {experience.title}
      </span>
    </SelectedMark>
  );
};
