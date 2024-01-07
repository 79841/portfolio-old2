import { navigationLinks, siteMetadata } from "@/data";
import { Link } from "lucide-react";
import React from "react";

export const Logo = () => {
  return (
    <h1 className="mb-4 text-4xl">
      <Link href={navigationLinks.home.path}>{siteMetadata.username}</Link>
    </h1>
  );
};
