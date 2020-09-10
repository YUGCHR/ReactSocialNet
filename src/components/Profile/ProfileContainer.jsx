import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { getUserStatus } from "../../redux/profile-reducer";
import { updateStatus } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId; // 6205;
    }
    this.props.getUserProfile(userId); //thunk
    this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.authorizedUserId,
  isAuth: state.auth.isAuth,
});

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }), withAuthRedirect, withRouter)(ProfileContainer);
