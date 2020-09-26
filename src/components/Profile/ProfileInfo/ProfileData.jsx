import React from "react";
import ProfileContact from "./ProfileContact";

const ProfileData = ({ profile, isOwner, gotoEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={gotoEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Full name: </b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      <div>
        <b>My professional skills: </b> {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return <ProfileContact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
        })}
      </div>
    </div>
  );
};

export default ProfileData;
