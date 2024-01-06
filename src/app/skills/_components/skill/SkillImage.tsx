import { ImageBox } from "@/components/image-box";
import { useRealTheme } from "@/hooks/useRealTheme";
import { TSkillData } from "@/types/Skill";
import React from "react";

type TSkillImageProps = {
  skill: TSkillData;
};
export const SkillImage = ({ skill }: TSkillImageProps) => {
  const [realTheme] = useRealTheme();
  const src =
    typeof skill.darkModeImage !== "undefined" && realTheme === "dark"
      ? skill.darkModeImage
      : skill.defaultImage;
  return (
    <>
      <ImageBox src={src} alt={skill.name} />
    </>
  );
};
