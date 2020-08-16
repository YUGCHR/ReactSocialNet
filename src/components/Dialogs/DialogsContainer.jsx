import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { addMessageActionCreator, updateNewMessageChangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

/* const DialogsContainer = () => {
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
} */

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageChange: (text) => {
      let action = updateNewMessageChangeActionCreator(text);
      dispatch(action);
    },
  };
};

/* let AuthRedirectComponent = withAuthRedirect(Dialogs);
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); */

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
