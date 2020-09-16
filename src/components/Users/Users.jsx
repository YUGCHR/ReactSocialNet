import React from "react";
//import s from "./Users.module.css";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = ({ totalCount, pageSize, currentPage, onPageChanges, users, ...props }) => {
  return (
    <div>
      <Paginator totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChanges={onPageChanges} />
      <div>
        {users.map((u) => (
          <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />
        ))}
      </div>
    </div>
  );
};

export default Users;
