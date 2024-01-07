"use client";
import { navigationLinks } from "@/data";
import { NavigationLink } from "./NavigationLink";
import { DotIcon } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import { cn } from "@/lib/utils";

export const Navigator = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div
      className={cn(
        "absolute right-0 z-50 flex flex-col items-end pr-4 lg:static lg:right-8 lg:items-start lg:pr-0 lg:shadow-none",
        isVisible && "shadow-bottom w-[calc(100%)] bg-background ",
      )}
    >
      <button className="lg:hidden" onClick={handleClick}>
        <DotIcon />
      </button>
      <nav
        className={cn(
          "hidden w-fit flex-col items-end gap-2 text-right lg:flex lg:items-start lg:text-left",
          isVisible ? "flex" : "hidden",
        )}
      >
        {Object.values(navigationLinks).map((navInfo) => (
          <NavigationLink key={navInfo.name} {...navInfo} />
        ))}
      </nav>
    </div>
  );
};
