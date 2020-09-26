import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileContact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  );
};

export default ProfileContact;
