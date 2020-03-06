import React from 'react';
import s from './Users.module.css'
import userPhotoEmpty from '../../assets/images/user-empty.png'
import Axios from 'axios';

class Users extends React.Component {

    constructor(props) { super(props); }

    componentDidMount() {
        Axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(Response => {
                this.props.setUsers(Response.data.items)
            });
    }

    render = () => {
        return (<div>
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
