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

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ];

    /* let dialogsElenemt = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
    ]; */

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I am fine!' },
        { id: 4, message: '(tattered cat)' },
        { id: 5, message: 'And how are you?' },
        { id: 6, message: 'I am fine also' }
    ];

    let dialogsElenemts = dialogs.map((d) => {return <DialogItem name={d.name} id={d.id} />});

    let messagesElenemts = messages.map((m) => {return <Message message={m.message} />});

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
