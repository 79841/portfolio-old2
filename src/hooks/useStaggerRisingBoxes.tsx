import { stagger, useAnimate } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

export const useStaggerRisingBoxes = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      ".rising-box",
      { opacity: 1, transform: "translateY(0)" },
      {
        duration: 1,
        delay: stagger(1, { startDelay: 0.15 }),
      },
    );
  }, [animate]);
  const BoxWrapper = ({ children }: PropsWithChildren) => (
    <div className="rising-box translate-y-full opacity-0">{children}</div>
  );
  return [scope, BoxWrapper] as const;
};
