"use client";

import { SelectedMark } from "@/components/selected-mark";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
type TNavigationLinkProps = {
  name: string;
  path: string;
};
export const NavigationLink = ({ name, path }: TNavigationLinkProps) => {
  const pathname = usePathname();
  const isSelected = pathname === path;
  return (
    <Link href={path} className={"w-fit"}>
      <SelectedMark isSelected={isSelected}>
        <span className="text-sm hover:font-semibold">{name}</span>
      </SelectedMark>
    </Link>
  );
};
