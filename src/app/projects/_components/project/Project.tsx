import { TProjectData } from "@/types/Project";
import Link from "next/link";
import React from "react";

type TProjectProps = {
  project: TProjectData;
};
export const Project = ({ project }: TProjectProps) => {
  return (
    <Link href={project.link}>
      <div className="hover:font-semibold">{project.name}</div>
    </Link>
  );
};
