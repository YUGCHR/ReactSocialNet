import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId); //thunk
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(connect(mapStateToProps, { getUserProfile }), withAuthRedirect, withRouter)(ProfileContainer);
