import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='../../picture2.png' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>
          <ProfileStatus status={"Hello!"} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
