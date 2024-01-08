"use client";
import React, { memo } from "react";
import { IntroPhrase } from "./IntroPhrase";
import { introPhrases } from "./constants";
import { useStaggerRisingBoxes } from "@/hooks/useStaggerRisingBoxes";

export const Intro = memo(function Intro() {
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
});
