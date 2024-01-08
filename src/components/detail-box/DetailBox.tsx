import React, { PropsWithChildren } from "react";

type TDetailBoxProps = PropsWithChildren;
export const DetailBox = ({ children }: TDetailBoxProps) => {
  return (
    <div className="static left-[50%] top-[50%] py-32 lg:absolute lg:w-96 lg:-translate-x-[50%] lg:-translate-y-[50%] lg:pt-0">
      <div className="flex flex-col  items-center justify-center gap-2 lg:h-60">
        {children}
      </div>
    </div>
  );
};
