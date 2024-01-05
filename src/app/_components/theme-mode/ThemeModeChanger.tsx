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
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute left-0 top-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
};
