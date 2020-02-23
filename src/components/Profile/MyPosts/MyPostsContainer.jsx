import React from 'react';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostChangeActionCreator(text);
    props.store.dispatch(action);
  }

  return (<MyPosts addPost={addPost} updateNewPostChange={onPostChange} 
    posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;
