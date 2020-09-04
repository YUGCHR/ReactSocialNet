import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowingInProgress, gerUsersThunkCreator } from "../../redux/users-reducer";
import { usersAPI } from "../../api/api";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainerAPI extends React.Component {
  /* constructor(props) {
    super(props);
  } */
  
  componentDidMount() {
    this.props.gerUsers(this.props.currentPage, this.props.pageSize); //thunk
    /* this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    }); */
  }

  onPageChanges = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null};
        <Users
          users={this.props.users}
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          /* isFetching={this.props.isFetching} */
          onPageChanges={this.onPageChanges}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
} */

/* let UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setCurrentPage: setCurrentPageAC,
    toggleIsFetching: toggleIsFetchingAC
})(UsersContainerAPI); */

//let UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowingInProgress, gerUsers: gerUsersThunkCreator })(UsersContainerAPI);
//let withRedirect = withAuthRedirect(UsersContainer);

export default compose(
  connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowingInProgress, gerUsers: gerUsersThunkCreator }),
  withAuthRedirect
)(UsersContainerAPI);
