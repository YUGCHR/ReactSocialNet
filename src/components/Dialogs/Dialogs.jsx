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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="A" id="2" />
                <DialogItem name="S" id="3" />
                <DialogItem name="Vk" id="4" />
                <DialogItem name="Va" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
            </div>
        </div>
    )
}

export default Dialogs;
