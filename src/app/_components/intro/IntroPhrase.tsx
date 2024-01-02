import React from "react";

type TIntroPhraseProps = {
  content: string;
  description: string;
};
export const IntroPhrase = ({ content, description }: TIntroPhraseProps) => {
  return (
    <div className="py-2 flex group items-end flex-col">
      <div className="text-3xl">{content}</div>
      <div className="text-right w-0 group-hover:w-full opacity-0 h-0 overflow-hidden text-muted-foreground group-hover:opacity-100 group-hover:h-fit transition-opacity duration-1000">
        {description}
      </div>
    </div>
  );
};
