"use client";

import { SelectedMark } from "@/components/selected-mark";
import { usePathname, useRouter } from "next/navigation";
import { memo } from "react";
type TNavigationLinkProps = {
  name: string;
  path: string;
};
export const NavigationLink = memo(function NavigationLink({
  name,
  path,
}: TNavigationLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isSelected = pathname.split("/").at(1) === path.slice(1);
  return (
    <div className={"w-fit"} onMouseDown={() => router.push(path)}>
      <SelectedMark isSelected={isSelected}>
        <span className="text-sm hover:font-semibold">{name}</span>
      </SelectedMark>
    </div>
  );
});
