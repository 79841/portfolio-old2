import { siteMetadata } from "@/data";
import Link from "next/link";
import React from "react";

export const ResumeDownLink = () => {
  return (
    <Link href={"/api/resume"} download={siteMetadata.resumeFileName}>
      Download Resume
    </Link>
  );
};
