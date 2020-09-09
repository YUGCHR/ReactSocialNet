import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { AddMessageForm } from "./AddMessageForm/AddMessageForm";

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

  let addNewMessage = (value) => {
    props.addMessage(value.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElenemts}</div>
      <div className={s.messages}>{messagesElenemts}</div>

      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
