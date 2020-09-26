import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/formControls/FormControls";

const ProfileDataForm = ({ handleSubmit, profile }) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>
        <b>Full name: </b> {createField("Full name", "fullNAme", Input, [])}
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
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "editProfileInfo" })(ProfileDataForm);

export default ProfileDataReduxForm;
