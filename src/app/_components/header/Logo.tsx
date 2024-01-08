import { navigationLinks, siteMetadata } from "@/data";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <h1 className="mb-4 text-2xl sm:text-4xl">
      <Link href={navigationLinks.home.path}>{siteMetadata.username}</Link>
    </h1>
  );
};
