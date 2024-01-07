import { ExperienceList } from "./_components/experience";
import { ExperienceDetail } from "./_components/experience/ExperienceDetail";

const Experiences = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between lg:justify-end">
      <ExperienceDetail />
      <div className="flex h-full w-full items-end justify-end">
        <ExperienceList />
      </div>
    </div>
  );
};

export default Experiences;
