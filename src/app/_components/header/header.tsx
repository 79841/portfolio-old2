import { siteMetadata } from "@/data";
import React from "react";
import { ThemeModeChanger } from "../theme-mode/ThemeModeChanger";

export const Header = () => {
  return (
    <div className="mb-8">
      <h1 className="mb-4 text-4xl">{siteMetadata.name}</h1>
      <div className="flex gap-2">
        <ThemeModeChanger />
        <div>{"FE Developer"}</div>
      </div>
    </div>
  );
};
