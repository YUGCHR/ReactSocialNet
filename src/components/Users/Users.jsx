import React from 'react';
import Axios from 'axios';
import s from './Users.module.css'
import userPhotoEmpty from '../../assets/images/user-empty.png'
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let getClassName = (p) => { return (props.currentPage === p ? s.selectedPage : s.pageSelector); }

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map(p => {
                return <span className={getClassName(p)} onClick={(e) => { props.onPageChanges(p); }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhotoEmpty} className={s.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            Axios
                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
                                { withCredentials: true, 
                                    headers: {"API-KEY": "6dd517b6-826d-4942-ab0a-022445b74fcd"}})
                                .then(Response => {
                                    if (Response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                });
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            Axios
                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
                                { withCredentials: true, headers: {"API-KEY": "6dd517b6-826d-4942-ab0a-022445b74fcd"}})
                                .then(Response => {
                                    if (Response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                });
                        }}>Follow</button>}
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

export default Users;
