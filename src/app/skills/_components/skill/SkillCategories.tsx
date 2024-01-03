import { skillsData } from "@/data";
import { SkillCategory } from "./SkillCategory";
import { useStaggerShowUpBoxes } from "@/hooks/useStaggerShowUpBoxes";
export const SkillCategories = () => {
  const [scope, BoxWrapper] = useStaggerShowUpBoxes();
  return (
    <div ref={scope} className="flex flex-col justify-end">
      {skillsData.map((skillCategory) => (
        <BoxWrapper key={skillCategory.name}>
          <SkillCategory skillCategory={skillCategory} />
        </BoxWrapper>
      ))}
    </div>
  );
};
