import { useStaggerShowUpBoxes } from "@/hooks/useStaggerShowUpBoxes";
import { TSkillData } from "@/types/Skill";
import { Skill } from "./Skill";

type TSkillListProps = {
  skills: TSkillData[];
};

export const SkillList = ({ skills }: TSkillListProps) => {
  const [scope, BoxWrapper] = useStaggerShowUpBoxes(0.2, 0.1);
  return (
    <div className="flex flex-col items-end">
      <div ref={scope} className="flex flex-col items-end">
        {skills.map((skill) => (
          <BoxWrapper key={skill.name}>
            <Skill skill={skill} />
          </BoxWrapper>
        ))}
      </div>
      <div className="my-4 h-[1px] w-full bg-black"></div>
    </div>
  );
};
