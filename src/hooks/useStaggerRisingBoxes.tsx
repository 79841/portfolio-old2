import { stagger, useAnimate } from "framer-motion";
import { FunctionComponent, PropsWithChildren, useEffect } from "react";

export const useStaggerRisingBoxes = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      ".rising-box",
      { opacity: 1, transform: "translateY(0)" },
      {
        duration: 1,
        delay: stagger(1, { startDelay: 0.15 }),
      }
    );
  }, [animate]);
  const BoxWrapper = ({ children }: PropsWithChildren) => (
    <div className="rising-box opacity-0 translate-y-full">{children}</div>
  );
  return [scope, BoxWrapper] as const;
};
