import React from 'react';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = updateNewPostChangeActionCreator(text);
          store.dispatch(action);
        }

        return (
          <MyPosts addPost={addPost} updateNewPostChange={onPostChange}
            posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
        )
      }
    }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
