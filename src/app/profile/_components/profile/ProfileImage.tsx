import { siteMetadata } from "@/data";
import Image from "next/image";

export const ProfileImage = () => {
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
