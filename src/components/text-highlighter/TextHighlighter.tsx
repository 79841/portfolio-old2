import React, { PropsWithChildren } from "react";

type TTextHighlighter = PropsWithChildren;
export const TextHighlighter = ({ children }: TTextHighlighter) => {
  return (
    <span className="h-full bg-secondary px-1 text-pink-700">{children}</span>
  );
};
