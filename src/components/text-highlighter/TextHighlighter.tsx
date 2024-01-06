import React, { PropsWithChildren } from "react";

type TTextHighlighter = PropsWithChildren;
export const TextHighlighter = ({ children }: TTextHighlighter) => {
  return <span className="bg-primary px-1 text-secondary">{children}</span>;
};
