import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={`${s.dialog} ${s.activeLink}`}>
            <NavLink to={path} activeClassName={s.activeLink}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElenemts = state.dialogs.map((d) => { return <DialogItem name={d.name} key={d.id} id={d.id} /> });

    let messagesElenemts = state.messages.map((m) => { return <Message message={m.message} key={m.id} /> });

    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageChange(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElenemts}
            </div>
            <div className={s.messages}>
                {messagesElenemts}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange}
                        value={newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
