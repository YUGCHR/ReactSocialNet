import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <MyPostsContainer store={props.store} />
      </div>
    </div>
  );
}

export default Profile;
