import React, { PropsWithChildren } from "react";

type TDetailBoxProps = PropsWithChildren;
export const DetailBox = ({ children }: TDetailBoxProps) => {
  return (
    <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="flex h-60 flex-col items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );
};
