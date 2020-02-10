import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  /* let posts = [
    {id: 1, message: 'Hi! Are you OK?', likeCount: 5},
    {id: 2, message: 'I am fine', likeCount: 3},
    {id: 3, message: 'And what about you?', likeCount: 1},
    {id: 4, message: 'I am fine also', likeCount: 7},
    {id: 5, message: 'We are fine today', likeCount: 2},
    {id: 6, message: 'This is the wondeful world!', likeCount: 30}
  ]; */

  let postsElements = props.posts.map((p) => {return <Post message={p.message} likes={p.likeCount} />});

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>my post</h3>
      </div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
