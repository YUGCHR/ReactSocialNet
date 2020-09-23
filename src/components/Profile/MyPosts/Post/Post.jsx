import React from 'react';
import s from './Post.module.css';
import postAvatarPhoto from "../../../../assets/images/0JRofTsuy93evl_J5.jpg";

const Post = (props) => {
  return (<div className={s.item}>
      <img src={postAvatarPhoto} alt="" />
      {props.message}
      <div>
        <span>Like -   </span>
         ({props.likes} likes)
      </div>
    </div>);
}

export default Post;
