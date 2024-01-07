import React, { PropsWithChildren } from "react";
import { Header } from "../header";

type TMainLayoutProps = PropsWithChildren;
export const MainLayout = ({ children }: TMainLayoutProps) => {
  return (
    <div className="h-screen w-screen p-4 lg:p-8">
      <div className=" flex h-full w-full flex-col overflow-scroll border border-primary p-4 scrollbar-hide lg:flex-row lg:p-8">
        <Header />
        <div className="flex w-full flex-[1] items-end justify-end">
          {children}
        </div>
      </div>
    </div>
  );
};
