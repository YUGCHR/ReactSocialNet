import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { requiredField, maxLengthCreator } from "../../common/validators/Validators";
import { Textarea } from "../../common/formControls/FormControls";

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => <Post key={p.id} message={p.message} likes={p.likeCount} />);

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
});

const maxLength = maxLengthCreator(10);

const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText" placeholder="Enter your post" validate={[requiredField, maxLength]} />
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
