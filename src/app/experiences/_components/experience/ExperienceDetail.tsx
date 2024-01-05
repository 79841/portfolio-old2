"use client";
import { DetailBox } from "@/components/detail-box";
import React from "react";
import { useSelectedExperienceContext } from "../../_contexts/selected-experience";
import { ImageBox } from "@/components/image-box";

export const ExperienceDetail = () => {
  const selectedExperience = useSelectedExperienceContext();
  if (selectedExperience === null) return null;
  return (
    <DetailBox>
      <ImageBox src={selectedExperience.image} alt={selectedExperience.title} />
      <div className="mt-2">
        <div className="flex justify-center">{selectedExperience.title}</div>
        <div className="flex justify-center text-sm text-muted-foreground">
          {selectedExperience.content}
        </div>
        <div className="flex justify-center text-sm text-muted-foreground">
          {selectedExperience.period}
        </div>
      </div>
    </DetailBox>
  );
};
