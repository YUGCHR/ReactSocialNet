import React from 'react';
import { addMessageActionCreator, updateNewMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {        
        let action = updateNewMessageChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs updateNewMessageChange={onMessageChange} addMessage={addMessage} dialogsPage={state} />)
}

export default DialogsContainer;
