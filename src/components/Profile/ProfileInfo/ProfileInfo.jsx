import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='../../picture1.png' />
      </div>
      <div className={s.decriptionBlock}>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;
