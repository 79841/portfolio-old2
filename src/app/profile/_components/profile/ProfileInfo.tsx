"use client";
import { siteMetadata } from "@/data";
import { useStaggerShowUpBoxes } from "@/hooks/useStaggerShowUpBoxes";
import Link from "next/link";

export const ProfileInfo = () => {
  const [scope, BoxWrapper] = useStaggerShowUpBoxes();
  return (
    <div ref={scope} className="flex flex-col items-end justify-between">
      <BoxWrapper>{siteMetadata.name}</BoxWrapper>
      <BoxWrapper>{siteMetadata.university}</BoxWrapper>
      <BoxWrapper>{siteMetadata.major}</BoxWrapper>
      <BoxWrapper>{siteMetadata.doubleMajor}</BoxWrapper>
      <BoxWrapper>{siteMetadata.birthday}</BoxWrapper>
      <BoxWrapper>{siteMetadata.address}</BoxWrapper>
      <BoxWrapper>
        <Link href={`matilto:${siteMetadata.primaryEmail}`}>
          {siteMetadata.primaryEmail}
        </Link>
      </BoxWrapper>
      <BoxWrapper>
        <Link href={siteMetadata.githubUrl}>LEtMeDEv(Github)</Link>
      </BoxWrapper>
      <BoxWrapper>
        <Link href={siteMetadata.blogUrl}>LEtMeDEv(Blog)</Link>
      </BoxWrapper>
    </div>
  );
};
