import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog} ${s.activeLink}`}>
      <NavLink to={path} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElenemts = state.dialogs.map((d) => {
    return <DialogItem name={d.name} key={d.id} id={d.id} />;
  });

  let messagesElenemts = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;
  });

  /*   let newMessageText = state.newMessageText;

  let addMessage = () => {};

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageChange(text);
  }; */

  let addNewMessage = (value) => {
    props.addMessage(value.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      
      <div className={s.dialogsItems}>{dialogsElenemts}</div>
      <div className={s.messages}>{messagesElenemts}</div>
      
      <AddMessageReduxForm onSubmit={addNewMessage} />
      
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
      </div>
      <div>
        <button>Add Message</button>
      </div>
    </form>
  );
};

//const testFunction = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm); <testFunction onSubmit={addNewMessage} /> 

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm); 

export default Dialogs;

// onChange={onMessageChange} value={newMessageText} onClick={addMessage} 
