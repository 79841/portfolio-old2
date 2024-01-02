"use client";
import React, { useEffect } from "react";
import { IntroPhrase } from "./IntroPhrase";
import { introPhrases } from "./constants";
import { useStaggerRisingBoxes } from "@/hooks/useStaggerRisingBoxes";

export const Intro = () => {
  const [scope, BoxWrapper] = useStaggerRisingBoxes();
  return (
    <div ref={scope}>
      {introPhrases.map((props) => (
        <BoxWrapper key={props.content}>
          <IntroPhrase {...props} />
        </BoxWrapper>
      ))}
    </div>
  );
};
