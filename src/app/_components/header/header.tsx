import { siteMetadata } from "@/data";
import React from "react";

export const Header = () => {
  return (
    <div>
      <h1 className="text-4xl mb-4">{siteMetadata.name}</h1>
      <div>{"FE Developer & Hacker"}</div>
    </div>
  );
};
