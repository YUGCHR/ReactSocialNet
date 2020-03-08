import React from 'react';
import s from './Users.module.css'
import userPhotoEmpty from '../../assets/images/user-empty.png'
import Axios from 'axios';

class Users extends React.Component {

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

    getClassName = (p) => { return (this.props.currentPage === p ? s.selectedPage : s.pageSelector); }

    render = () => {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (<div>
            <div>
                {pages.map(p => {
                    return <span className={this.getClassName(p)} onClick={(e) => { this.onPageChanges(p); }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhotoEmpty} className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>UnFollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>)
    }


}

export default Users;
