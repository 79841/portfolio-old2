"use client";

import { SelectedMark } from "@/components/selected-mark";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler, memo } from "react";
type TNavigationLinkProps = {
  name: string;
  path: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};
export const NavigationLink = memo(function NavigationLink({
  name,
  path,
  onClick,
}: TNavigationLinkProps) {
  const pathname = usePathname();
  const isSelected = pathname.split("/").at(1) === path.slice(1);
  return (
    <Link href={path} className={"w-fit"} onClick={onClick}>
      <SelectedMark isSelected={isSelected}>
        <span className="text-sm hover:font-semibold">{name}</span>
      </SelectedMark>
    </Link>
  );
});
