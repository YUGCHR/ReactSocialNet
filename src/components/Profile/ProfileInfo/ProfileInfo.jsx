import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import topPagePhoto from "../../../assets/images/topPagePhoto2.png";
import userPhotoEmpty from "../../../assets/images/user-empty.png";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src={topPagePhoto} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        
        <img src={profile.photos.large || userPhotoEmpty} alt="" className={s.mainPhoto} />
        <div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
