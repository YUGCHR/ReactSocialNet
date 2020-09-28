import React from "react";
import s from "./ProfileInfo.module.css";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/formControls/FormControls";
//import ProfileContact from "./ProfileContact";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit} className={s.profileForm}>
      <div>
        <button>Save</button>
      </div>
      <div>{error && <div className={s.formSummaryError}>{error}</div>}</div>
      <div>
        <b>Full name: </b> {createField("Full name", "fullName", Input, [])}
      </div>
      <div>
        <b>Looking for a job: </b> {createField(null, "lookingForAJob", Input, [], { type: "checkbox" }, "Are you looking for a job so strong?")}
      </div>
      <div>
        <b>My professional skills: </b> {createField("My professional skills", "lookingForAJobDescription", Textarea, [])}
      </div>
      <div>
        <b>About me: </b> {createField("About me", "aboutMe", Textarea, [])}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>{key}: </b> {createField(key, "contacts." + key, Input, [])}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "editProfileInfo" })(ProfileDataForm);

export default ProfileDataReduxForm;
