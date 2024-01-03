"use client";
import { stagger, useAnimate } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

export const useStaggerShowUpBoxes = (duration = 0.5, delay = 0.1) => {
  const [scope, animate] = useAnimate();
  const targetClass = "show-in-box";
  useEffect(() => {
    animate(
      `.${targetClass}`,
      { opacity: [0, 1] },
      {
        duration,
        delay: stagger(delay, { startDelay: 0.15 }),
      },
    );
  }, [animate, delay, duration]);
  const BoxWrapper = ({ children }: PropsWithChildren) => (
    <div className={`${targetClass} origin-right`}>{children}</div>
  );
  return [scope, BoxWrapper] as const;
};
