import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { getUserStatus } from "../../redux/profile-reducer";
import { updateStatus } from "../../redux/profile-reducer";
import { savePhoto } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component { // saveProfile was added in Hook version
  profileRefresh = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId; // 6205; this.props.history.push("/login");
    }
    this.props.getUserProfile(userId); //thunk
    this.props.getUserStatus(userId);
  };

  componentDidMount() {
    this.profileRefresh();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.profileRefresh();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto }), withAuthRedirect, withRouter)(ProfileContainer);
