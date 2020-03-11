import React from 'react';
import Axios from 'axios';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, toggleIsFetching } from '../../redux/auth-reducer';
import store from '../../redux/redux-store';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me/`, { withCredentials: true })
      .then(Response => {        
        this.props.toggleIsFetching(false);
        if(Response.data.resultCode === 0){
          let{id, login, email} = Response.data.data;
        this.props.setAuthUserData(id, email, login);
        }
      });
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching })(HeaderContainer);
