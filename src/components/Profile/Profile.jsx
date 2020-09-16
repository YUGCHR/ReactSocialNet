import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div className={s.content}>
      <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      </div>
      <div>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
