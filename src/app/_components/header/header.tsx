import { siteMetadata } from "@/data";
import React from "react";

export const Header = () => {
  return (
    <div className="mb-8">
      <h1 className="mb-4 text-4xl">{siteMetadata.name}</h1>
      <div>{"FE Developer & Hacker"}</div>
    </div>
  );
};
