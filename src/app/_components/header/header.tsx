import React from "react";
import { ThemeModeChanger } from "../theme-mode/ThemeModeChanger";
import { ResumeDownLink } from "./ResumeDownLink";
import { Navigator } from "../navigation";
import { Logo } from "./Logo";
import { Profession } from "./Profession";

export const Header = () => {
  return (
    <div className="relative flex w-full flex-row justify-between lg:w-fit lg:flex-col lg:justify-start">
      <div className="mb-8">
        <Logo />
        <div className="flex gap-2 text-nowrap">
          <ThemeModeChanger />
          <Profession />
          {"/"}
          <ResumeDownLink />
        </div>
      </div>
      <Navigator />
    </div>
  );
};
