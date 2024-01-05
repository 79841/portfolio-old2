import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

type TSelectedMark = { isSelected: boolean } & PropsWithChildren;
export const SelectedMark = ({ isSelected, children }: TSelectedMark) => {
  return (
    <div className="flex">
      {isSelected && <div>*</div>}
      <div className={cn(isSelected && "font-semibold")}>{children}</div>
    </div>
  );
};
