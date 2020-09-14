import React, { PureComponent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import { requiredField, maxLengthCreator } from "../../common/validators/Validators";
import { Textarea } from "../../common/formControls/FormControls";

class MyPosts extends PureComponent {
  render() {
    let postsElements = this.props.posts.map((p) => <Post message={p.message} likes={p.likeCount} />);

    let onAddPost = (value) => {
      this.props.addPost(value.newPostText);
    };

    return (
      <div className={s.postsBlock}>
        <div className={s.postsBlockHeader}>my post</div>
        <AddNewPostReduxForm onSubmit={onAddPost} />
        <div className={s.posts}>{postsElements}</div>
      </div>
    );
  }
}

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
