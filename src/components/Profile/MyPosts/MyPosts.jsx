import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post message='Hi! Are you OK?' likes='5' />
      <Post message='I am fine' likes='8' />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
s
export default MyPosts;
