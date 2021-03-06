import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile, isProfileUpdateSuccess }) => {
  return (
    <div className={s.content}>
      <div>
        <ProfileInfo
          isOwner={isOwner}
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          savePhoto={savePhoto}
          saveProfile={saveProfile}
          isProfileUpdateSuccess={isProfileUpdateSuccess}
        />
      </div>
      <div>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
