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
    
    let dialogsElenemts = props.state.dialogs.map((d) => {return <DialogItem name={d.name} id={d.id} />});

    let messagesElenemts = props.state.messages.map((m) => {return <Message message={m.message} />});

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElenemts}
            </div>
            <div className={s.messages}>
                {messagesElenemts}
            </div>
        </div>
    )
}

export default Dialogs;
