import React from "react";
import { ProfileImage, ProfileInfo } from "./_components/profile";

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <ProfileInfo />
      <ProfileImage />
    </div>
  );
};

export default ProfilePage;
