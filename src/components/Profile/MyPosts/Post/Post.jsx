import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (<div className={s.item}>
      <img src='0JRofTsuy93evl_J5.jpg' />
      {props.message}
      <div>
        <span>Like -   </span>
         ({props.likes} likes)
      </div>
    </div>);
}

export default Post;
