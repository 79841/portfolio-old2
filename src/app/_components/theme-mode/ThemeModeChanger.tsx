"use client";
import { useRealTheme } from "@/hooks/useRealTheme";
import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";

export const ThemeModeChanger = () => {
  const [realTheme, setTheme] = useRealTheme();
  const handleClick = () => {
    if (realTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <button onClick={handleClick} className="relative">
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:hidden dark:-rotate-90" />
      <MoonIcon className="left-0 top-0 hidden h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:block dark:rotate-0" />
    </button>
  );
};
