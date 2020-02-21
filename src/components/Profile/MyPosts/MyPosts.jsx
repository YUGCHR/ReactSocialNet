import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements =
    props.posts.map(p => <Post message={p.message} likes={p.likeCount} />);

  let newPostElement = React.createRef();  
  
  let addPostActionCreator = () => {    
    return {type: 'ADD-POST'};
  }

  let updateNewPostChangeActionCreator = (text) => {
  return {type: 'UPDATE-NEW-POST-TEXT', newText: text}
  }

  let addPost = () => {    
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostChangeActionCreator(text);
    props.dispatch(action);
  }

  return (
    <div className={s.postsBlock}>
      <h3>my post</h3>

      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
