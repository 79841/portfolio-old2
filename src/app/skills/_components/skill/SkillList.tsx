import { useStaggerShowUpBoxes } from "@/hooks/useStaggerShowUpBoxes";
import { TSkillData } from "@/types/Skill";
import { Skill } from "./Skill";

type TSkillListProps = {
  skills: TSkillData[];
};

export const SkillList = ({ skills }: TSkillListProps) => {
  const [scope, BoxWrapper] = useStaggerShowUpBoxes(0.2, 0.1);
  return (
    <div
      ref={scope}
      className="flex flex-[1] flex-col justify-end lg:my-4 lg:items-end lg:justify-start"
    >
      {skills.map((skill) => (
        <BoxWrapper key={skill.name}>
          <Skill skill={skill} />
        </BoxWrapper>
      ))}
    </div>
  );
};
