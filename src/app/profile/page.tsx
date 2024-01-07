"use client";
import { siteMetadata } from "@/data";
import { useStaggerShowUpBoxes } from "@/hooks/useStaggerShowUpBoxes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const [scope, BoxWrapper] = useStaggerShowUpBoxes();
  return (
    <div className="flex">
      <div ref={scope} className="mr-4 flex flex-col items-end justify-between">
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
      <ProfileImage />
    </div>
  );
};

const ProfileImage = () => {
  return (
    <div className="relative h-60 w-60 animate-show-up opacity-0">
      <Image
        src={siteMetadata.profilePrimary}
        alt="profile"
        fill
        priority
        className="object-cover object-top"
      />
    </div>
  );
};

export default ProfilePage;
