import React, { Component, lazy, Suspense } from "react"; // eslint-disable-line no-unused-vars
import { connect } from "react-redux";
import { compose } from "redux";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import { initializeApp } from "./redux/app-reducer";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
//import DialogsContainer from "./components/Dialogs/DialogsContainer"; // - lazy import occurs instead
//import ProfileContainer from "./components/Profile/ProfileContainer";
//import UsersContainer from "./components/Users/UsersContainer";
//import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/preloader/Preloader";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const LoginPage = lazy(() => import("./components/Login/Login"));
class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some error occured");
    //console.error(promiseRejectionEvent);
  };
  componentDidMount() {
    this.props.initializeApp(); //thunk
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } // this.props.history.push("/login");
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
            <Route path="/news" render={News} />
            <Route path="/music" render={Music} />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/settings" render={Settings} />
            <Route path="/login" render={withSuspense(LoginPage)} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
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
