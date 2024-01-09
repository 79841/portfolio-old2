"use client";
import { TProjectData } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { IoIosArrowBack, IoLogoGithub } from "react-icons/io";
import { Carousel } from "./Carousel";
type TProjectDetailProps = PropsWithChildren;
export const ProjectDetail = ({ children }: TProjectDetailProps) => {
  return (
    <div className="flex w-[40rem] animate-show-up flex-col items-start gap-4 overflow-scroll opacity-0 scrollbar-hide lg:mt-32 lg:h-[calc(100%-8rem)]">
      {children}
    </div>
  );
};

type THeaderProps = PropsWithChildren;
const Header = ({ children }: THeaderProps) => <div>{children}</div>;

type TTitleProps = { title: string };
const Title = ({ title }: TTitleProps) => {
  const router = useRouter();
  return (
    <h1 className="flex items-center text-lg sm:text-2xl">
      <button onClick={() => router.back()}>
        <IoIosArrowBack />
      </button>
      {title}
    </h1>
  );
};

type TDescriptionProps = { description: string };
const Description = ({ description }: TDescriptionProps) => (
  <div className="text-muted-foreground">{description}</div>
);

type TContentProps = PropsWithChildren;
const Content = ({ children }: TContentProps) => (
  <div className="flex flex-col gap-2 text-sm sm:text-base">{children}</div>
);

type TGithubUrlsProps = {
  githubUrls: TProjectData["github"];
};
const GithubUrls = ({ githubUrls }: TGithubUrlsProps) => (
  <>
    {githubUrls && (
      <div className="flex flex-wrap items-center gap-2 text-nowrap">
        <IoLogoGithub className="text-lg" />
        {githubUrls.map((githubUrl) => (
          <Link key={githubUrl} href={githubUrl}>
            {githubUrl.split("/").at(-1)}
          </Link>
        ))}
      </div>
    )}
  </>
);

type TTechStackProps = {
  techStack: TProjectData["techStack"];
};
const TechStack = ({ techStack }: TTechStackProps) => (
  <div className="flex flex-wrap gap-2">
    {techStack.map((tech) => (
      <div key={tech} className="flex gap-2">
        <span>/</span>
        {tech}
      </div>
    ))}
  </div>
);

type TDateProps = {
  date: TProjectData["date"];
};
const Date = ({ date }: TDateProps) => (
  <div className="text-muted-foreground">{date}</div>
);

ProjectDetail.Header = Header;
ProjectDetail.Title = Title;
ProjectDetail.Description = Description;
ProjectDetail.Carousel = Carousel;
ProjectDetail.Content = Content;
ProjectDetail.GithubUrls = GithubUrls;
ProjectDetail.TechStack = TechStack;
ProjectDetail.Date = Date;
