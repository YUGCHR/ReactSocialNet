import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/preloader/Preloader";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { initializeApp } from "./redux/app-reducer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
// <Route path="/dialogs" render={() => <LazyLoadingComponent load={DialogsContainer} />} />

class App extends Component {
  componentDidMount() {
    this.props.initializeApp(); //thunk
  }
  //let CallProfile = () => <ProfileContainer />;
  //let CallUsers = () => <UsersContainer />;
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } // this.props.history.push("/login");
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => {
              return (
                <div>
                  <Suspense fallback={<div>LOADING...</div>}>
                    <DialogsContainer />
                  </Suspense>
                </div>
              );
            }}
          />
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

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
