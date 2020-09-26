import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input  } from "../../common/formControls/FormControls";

const ProfileDataForm = ({ profile }) => {
  return <form>  
    <div>
      <button onClick={() => {}}>Save</button>
    </div>
  <div>
    <b>Full name: </b> {createField("Full name", "fullNAme", Input, []) }
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
  
</form>;
};

const ProfileDataReduxForm = reduxForm({ form: "editProfileInfo" })(ProfileDataForm);    

export default ProfileDataReduxForm;
