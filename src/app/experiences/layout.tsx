import React, { PropsWithChildren } from "react";
import { SelectedExperienceContextProvider } from "./_contexts/selected-experience";

type TExperiencePageLayoutProps = PropsWithChildren;
const ExperiencePageLayout = ({ children }: TExperiencePageLayoutProps) => {
  return (
    <SelectedExperienceContextProvider>
      {children}
    </SelectedExperienceContextProvider>
  );
};

export default ExperiencePageLayout;
