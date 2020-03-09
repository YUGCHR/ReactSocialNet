import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='../../picture2.png' />
      </div>
      <div className={s.decriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>
          ava + desc
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
