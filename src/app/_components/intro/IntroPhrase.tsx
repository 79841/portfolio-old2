import React from "react";

type TIntroPhraseProps = {
  content: string;
  description: string;
};
export const IntroPhrase = ({ content, description }: TIntroPhraseProps) => {
  return (
    <div className="group flex flex-col items-end py-1 sm:py-2">
      <div className="text-xl sm:text-3xl">{content}</div>
      <div className="h-0 w-0 overflow-hidden text-right text-muted-foreground opacity-0 transition-opacity duration-1000 group-hover:h-fit group-hover:w-full group-hover:opacity-100">
        {description}
      </div>
    </div>
  );
};
