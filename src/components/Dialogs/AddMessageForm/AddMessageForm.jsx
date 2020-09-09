import React from "react";
//import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/formControls/FormControls";
import { requiredField, maxLengthCreator } from "../../common/validators/Validators";

const maxLength = maxLengthCreator(10);

const AddMessageFormCreate = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newMessageBody" placeholder="Enter your message" validate={[requiredField, maxLength]} />
      </div>
      <div>
        <button>Add Message</button>
      </div>
    </form>
  );
};

export const AddMessageForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageFormCreate);
