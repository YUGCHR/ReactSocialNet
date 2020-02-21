import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import { addMessageActionCreator, updateNewMessageChangeActionCreator } from '../../redux/dialogs-reducer';

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

    let dialogsElenemts = props.dialogsPage.dialogs.map((d) => { return <DialogItem name={d.name} id={d.id} /> });

    let messagesElenemts = props.dialogsPage.messages.map((m) => { return <Message message={m.message} /> });

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageChangeActionCreator(text);
        props.dispatch(action);
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
                    <textarea onChange={onMessageChange} ref={newMessageElement}
                        value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
