import React from "react";
import s from "./Users.module.css";
import userPhotoEmpty from "../../assets/images/user-empty.png";
import { NavLink } from "react-router-dom";

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhotoEmpty} alt="" className={s.userPhoto} />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <div className={s.youAreFollowing}>
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}>
                UnFollow
              </button>
              <div>You are now following {user.name}</div>
            </div>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}>
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
