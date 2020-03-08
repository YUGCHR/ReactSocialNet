import React from 'react';
import Users from './Users';
import Axios from 'axios';

class UsersAPIComponent extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(Response => {
                this.props.setUsers(Response.data.items);
                this.props.setTotalUsersCount(Response.data.totalCount);
            });
    }

    onPageChanges = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        Axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(Response => {
                this.props.setUsers(Response.data.items)
            });
    }
    
    render() {
        return <Users users={this.props.users}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanges={this.onPageChanges}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

export default UsersAPIComponent;
