import { navigationLinks, siteMetadata } from "@/data";
import { NavigationLink } from "./NavigationLink";

export const Navigator = () => {
  return (
    <nav className="flex w-fit flex-col gap-2">
      {Object.values(navigationLinks).map((navInfo) => (
        <NavigationLink key={navInfo.name} {...navInfo} />
      ))}
    </nav>
  );
};
