import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import topPagePhoto from "../../../assets/images/topPagePhoto2.png";
import userPhotoEmpty from "../../../assets/images/user-empty.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div>
        <img src={topPagePhoto} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhotoEmpty} alt="" className={s.mainPhoto} />
        <div>{isOwner || <input type={"file"} onChange={onMainPhotoSelected} />}</div>

        <div>
          <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
          <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
        <div>
          <b>About me:</b> {profile.aboutMe}
        </div>

        <div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
