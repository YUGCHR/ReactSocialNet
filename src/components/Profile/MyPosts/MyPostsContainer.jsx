import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

/* const MyPostsContainer = () => {
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
} */

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
   /*  updateNewPostChange: (text) => {
      let action = updateNewPostChangeActionCreator(text);
      dispatch(action);
    } */
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
