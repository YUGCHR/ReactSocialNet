import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi! Are you OK?', likeCount: 5 },
        { id: 2, message: 'I am fine', likeCount: 3 },
        { id: 3, message: 'And what about you?', likeCount: 1 },
        { id: 4, message: 'I am fine also', likeCount: 7 },
        { id: 5, message: 'We are fine today', likeCount: 2 },
        { id: 6, message: 'This is the wondeful world!', likeCount: 30 }
    ],
    profile: null,
    status: "",
    newPostText: 'Type your new post here'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => { 
    usersAPI.getProfile(userId)      
      .then(response => {
        dispatch (setUserProfile(response.data));
      });
 };

 export const getUserStatus = (userId) => (dispatch) => { 
    profileAPI.getStatus(userId)      
      .then(response => {
        dispatch (setStatus(response.data));
      });
 };

 export const updateStatus = (status) => (dispatch) => { 
    profileAPI.updateStatus(status)      
      .then(response => {
          if(response.data.resultCode === 0){
        dispatch (setStatus(status));
          };
      });
 };

export const updateNewPostChangeActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;
