import React from 'react';
import Axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import store from '../../redux/redux-store';

class ProfileContainer extends React.Component {

  componentDidMount() {
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(Response => {
        this.props.setUserProfile(Response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
