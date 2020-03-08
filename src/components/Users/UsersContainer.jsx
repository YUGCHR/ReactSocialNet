import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';

class UsersContainerAPI extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(Response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(Response.data.items);
                this.props.setTotalUsersCount(Response.data.totalCount);
            });
    }

    onPageChanges = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(Response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(Response.data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null};
        <Users users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                /* isFetching={this.props.isFetching} */
                onPageChanges={this.onPageChanges}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
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
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);

export default UsersContainer;
