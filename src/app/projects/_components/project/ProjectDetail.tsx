"use client";
import { TProjectData } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { IoIosArrowBack, IoLogoGithub } from "react-icons/io";
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

type TImagesProps = {
  images: TProjectData["images"];
  imageWidth: string;
};
const Images = ({ images, imageWidth }: TImagesProps) => {
  return (
    <div className="flex w-full justify-center">
      {images.length > 0 ? (
        <div className="relative h-60 w-full">
          {images.reverse().map((imageUrl, i) => {
            const style = {
              left: `calc((40rem - ${imageWidth}) / ${images.length - 1} * ${
                images.length - 1 - i
              })`,
              width: imageWidth,
            };
            return (
              <ProjectImage key={imageUrl} style={style} imageUrl={imageUrl} />
            );
          })}
        </div>
      ) : (
        <NoImagesBox />
      )}
    </div>
  );
};

type TProjectImageProps = {
  imageUrl: string;
  style: React.CSSProperties;
};
const ProjectImage = ({ imageUrl, style }: TProjectImageProps) => {
  return (
    <div key={imageUrl} className={"absolute h-60 hover:z-50"} style={style}>
      <Image
        src={imageUrl}
        alt={imageUrl.slice(imageUrl.lastIndexOf("."))}
        fill
        priority
        className="shadow-x"
      />
    </div>
  );
};

const NoImagesBox = () => (
  <div className="flex h-60 w-full items-center justify-center border border-primary text-xl text-muted-foreground sm:text-2xl">
    No Images
  </div>
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
      <div className="flex items-center gap-2">
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
ProjectDetail.Images = Images;
ProjectDetail.Content = Content;
ProjectDetail.GithubUrls = GithubUrls;
ProjectDetail.TechStack = TechStack;
ProjectDetail.Date = Date;
