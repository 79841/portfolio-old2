import React, { PropsWithChildren } from "react";
import { SelectedSkillCategoryContextProvider } from "./_contexts/selected-skill-category";
import { SelectedSkillContextProvider } from "./_contexts/selected-skill";

type TSkillsPageLayoutProps = PropsWithChildren;
const SkillsPageLayout = ({ children }: TSkillsPageLayoutProps) => {
  return (
    <SelectedSkillCategoryContextProvider>
      <SelectedSkillContextProvider>{children}</SelectedSkillContextProvider>
    </SelectedSkillCategoryContextProvider>
  );
};
export default SkillsPageLayout;
