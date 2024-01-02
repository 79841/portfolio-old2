import { navigationLinks, siteMetadata } from "@/data";
import Link from "next/link";
import { NavigationLink } from "./NavigationLink";

export const Navigator = () => {
  return (
    <nav className="flex flex-col relative top-8 gap-4 w-fit">
      {Object.values(navigationLinks).map((navInfo) => (
        <NavigationLink key={navInfo.name} {...navInfo} />
      ))}
    </nav>
  );
};
