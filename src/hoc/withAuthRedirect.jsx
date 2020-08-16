import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addMessageActionCreator, updateNewMessageChangeActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { ReactComponent } from "*.svg";

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"} />;
      }
      return <Component {...this.props} />;
    }
  }
  return RedirectComponent;
};
