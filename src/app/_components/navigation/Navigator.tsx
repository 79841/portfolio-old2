"use client";
import { navigationLinks } from "@/data";
import { NavigationLink } from "./NavigationLink";
import { DotIcon } from "lucide-react";
import { FocusEventHandler, MouseEventHandler, useState } from "react";
import { cn } from "@/lib/utils";

export const Navigator = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick: MouseEventHandler = () => {
    setIsVisible((prev) => !prev);
  };
  const handleBlur: FocusEventHandler = () => {
    setIsVisible(false);
  };
  return (
    <div
      className={cn(
        "absolute right-0 z-50 flex flex-col items-end lg:static lg:right-8 lg:items-start",
        isVisible && "w-[calc(100%+1rem)] pb-8 backdrop-blur-sm",
      )}
    >
      <button
        className="lg:hidden"
        onBlur={handleBlur}
        tabIndex={0}
        onClick={handleClick}
      >
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
