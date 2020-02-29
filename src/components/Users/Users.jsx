import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, followed: false, userPhoto: '../../0JRofTsuy93evl_J5.jpg', fullName: 'Dmitry', status: 'I am',
                location: { city: 'Kharkov', country: 'Ukraine' }
            },
            {
                id: 2, followed: true, userPhoto: '../../0JRofTsuy93evl_J5.jpg', fullName: 'Sasha', status: 'I am not',
                location: { city: 'Kyiv', country: 'Ukraine' }
            },
            {
                id: 3, followed: false, userPhoto: '../../0JRofTsuy93evl_J5.jpg', fullName: 'Dmitry', status: 'I am here',
                location: { city: 'Moscow', country: 'Russia' }
            },
            {
                id: 4, followed: false, userPhoto: '../../0JRofTsuy93evl_J5.jpg', fullName: 'Dmitry', status: 'I am there',
                location: { city: 'Dublin', country: 'Ireland' }
            }
        ])
    }

    return (<div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.userPhoto} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>)
}

export default Users;
