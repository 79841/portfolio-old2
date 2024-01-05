import { ExperienceList } from "./_components/experience";
import { ExperienceDetail } from "./_components/experience/ExperienceDetail";
import { SelectedExperienceContextProvider } from "./_contexts/selected-experience";

const Experiences = () => {
  return (
    <SelectedExperienceContextProvider>
      <div className="flex h-full w-full items-end justify-end">
        <ExperienceList />
      </div>
      <ExperienceDetail />
    </SelectedExperienceContextProvider>
  );
};

export default Experiences;
