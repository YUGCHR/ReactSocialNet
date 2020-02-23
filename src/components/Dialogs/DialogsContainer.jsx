import React from 'react';
import { addMessageActionCreator, updateNewMessageChangeActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> 
            { (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onMessageChange = (text) => {
                    let action = updateNewMessageChangeActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    <Dialogs updateNewMessageChange={onMessageChange} addMessage={addMessage} dialogsPage={state} />
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
