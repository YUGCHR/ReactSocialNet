import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  return (
    <div className={s.content}>
      <div>
        <ProfileInfo isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} savePhoto={savePhoto} />
      </div>
      <div>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
