import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likeCount} />);

  //let newPostElement = React.createRef();

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  };

  /* let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostChange(text);
  }; */

  return (
    <div className={s.postsBlock}>
      <div className={s.postsBlockHeader}>my post</div>
      <AddNewPostReduxForm onSubmit={onAddPost} />      
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" placeholder="Enter your post" />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({ form: "profileAddNewPostForm" })(addNewPostForm);

export default MyPosts;

// onChange={onPostChange} ref={newPostElement} value={props.newPostText} onClick={onAddPost}
