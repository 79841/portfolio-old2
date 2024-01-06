import { DefaultCarousel } from "@/components/carousel";
import { TProjectData } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { IoIosArrowBack } from "react-icons/io";
type TProjectDetailProps = PropsWithChildren;
export const ProjectDetail = ({ children }: TProjectDetailProps) => {
  return (
    <div className="scrollbar-hide mt-32 flex h-[calc(100%-8rem)] w-[40rem] flex-col items-start gap-4 overflow-scroll">
      {children}
    </div>
  );
};

type THeaderProps = PropsWithChildren;
const Header = ({ children }: THeaderProps) => <div>{children}</div>;

type TTitleProps = { title: string };
const Title = ({ title }: TTitleProps) => {
  const router = useRouter();
  return <h1 className="flex -translate-x-2 items-center text-2xl">
    <button onClick={()=>router.}><IoIosArrowBack /></button>
    {title}
  </h1>
};

type TDescriptionProps = { description: string };
const Description = ({ description }: TDescriptionProps) => (
  <div className="text-muted-foreground">{description}</div>
);

type TImagesProps = {
  images: TProjectData["images"];
};
const Images = ({ images }: TImagesProps) => {
  return (
    <div className="flex justify-center">
      {images.length > 0 ? (
        <DefaultCarousel
          renders={images.map((imageUrl) => (
            <div key={imageUrl} className="relative h-60 w-96">
              {
                <Image
                  src={imageUrl}
                  alt={imageUrl.slice(imageUrl.lastIndexOf("."))}
                  fill
                  priority
                />
              }
            </div>
          ))}
        />
      ) : (
        <div className="flex h-60 w-96 items-center justify-center border border-primary text-2xl text-muted-foreground">
          No Images
        </div>
      )}
    </div>
  );
};

type TContentProps = PropsWithChildren;
const Content = ({ children }: TContentProps) => (
  <div className="flex flex-col gap-2">{children}</div>
);

type TGithubUrlsProps = {
  githubUrls: TProjectData["github"];
};
const GithubUrls = ({ githubUrls }: TGithubUrlsProps) => (
  <>
    {githubUrls && (
      <div>
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
  <div className="flex gap-2">
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
