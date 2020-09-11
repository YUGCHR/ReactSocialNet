import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp(); //thunk
  }

  //let CallProfile = () => <ProfileContainer />;
  //let CallDialogs = () => <DialogsContainer />;
  //let CallUsers = () => <UsersContainer />;

  render() {

    if(!this.props.initialized){
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/settings" render={Settings} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
