import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => { return <Post message={p.message} likes={p.likeCount} /> });
  let addPost = () => {
    let text = document.getElementById('new-post').value;
    alert(text)
  };

  return (
    <div>
      <div className={s.postsBlock}>
        <h3>my post</h3>
      </div>
      <div>
        <div>
          <textarea id='new-post'></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
