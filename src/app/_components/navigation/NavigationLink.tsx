"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
type TNavigationLinkProps = {
  name: string;
  path: string;
};
export const NavigationLink = ({ name, path }: TNavigationLinkProps) => {
  const pathname = usePathname();
  return (
    <Link href={path} className={"w-fit"}>
      <span className={`${pathname === path && "font-semibold"}`}>{name}</span>
    </Link>
  );
};
