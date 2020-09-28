import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Profile from "./Profile";

//used this version of ProfileContainer - with useEffect hook
const ProfileContainer = (props) => {
  const profileRefresh = () => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.authorizedUserId; // 6205; this.props.history.push("/login");
    }
    props.getUserProfile(userId); //thunk
    props.getUserStatus(userId);
  };

  useEffect(() => {
    profileRefresh();
  }, [props.match.params.userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Profile
      isOwner={!props.match.params.userId}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      savePhoto={props.savePhoto}
      saveProfile={props.saveProfile}
      isProfileUpdateSuccess={props.isProfileUpdateSuccess}
    />
  );
};

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  isProfileUpdateSuccess: state.profilePage.isProfileUpdateSuccess,
});

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile }), withAuthRedirect, withRouter)(ProfileContainer);
