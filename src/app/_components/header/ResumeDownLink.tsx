import { siteMetadata } from "@/data";
import Link from "next/link";
import React from "react";

export const ResumeDownLink = () => {
  return (
    <Link
      href={siteMetadata.resumePath}
      download={siteMetadata.resumePath.split("/").at(-1)}
      target="_blank"
    >
      Download Resume
    </Link>
  );
};
