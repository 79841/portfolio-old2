"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type TRealTheme = "light" | "dark" | undefined;

export const useRealTheme = () => {
  const { theme, setTheme } = useTheme();

  const [realTheme, setRealTheme] = useState<TRealTheme>(undefined);
  useEffect(() => {
    const getSystemTheme = () => {
      if (typeof window === "undefined") return undefined;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };
    if (theme === "system") {
      setRealTheme((prev) => getSystemTheme());
    } else {
      setRealTheme((prev) => theme as TRealTheme);
    }
  }, [theme]);

  return [realTheme, setTheme] as const;
};
