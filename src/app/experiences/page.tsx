import { ExperienceList } from "./_components/experience";
import { ExperienceDetail } from "./_components/experience/ExperienceDetail";

const Experiences = () => {
  return (
    <>
      <div className="flex h-full w-full items-end justify-end">
        <ExperienceList />
      </div>
      <ExperienceDetail />
    </>
  );
};

export default Experiences;
