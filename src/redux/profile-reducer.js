import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";
//import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";
const TOGGLE_IS_PROFILE_UPDATE_SUCCESS = "TOGGLE-IS-PROFILE-UPDATE-SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Hi! Are you OK?", likeCount: 5 },
    { id: 2, message: "I am fine", likeCount: 3 },
    { id: 3, message: "And what about you?", likeCount: 1 },
    { id: 4, message: "I am fine also", likeCount: 7 },
    { id: 5, message: "We are fine today", likeCount: 2 },
    { id: 6, message: "This is the wondeful world!", likeCount: 30 },
  ],
  profile: null,
  status: "",
  isProfileUpdateSuccess: false,
  newPostText: "Type your new post here",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        message: action.newPostText,
        likeCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case DELETE_POST: {
      return { ...state, posts: state.posts.filter((p) => p.id !== action.postId) };
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case TOGGLE_IS_PROFILE_UPDATE_SUCCESS: {
      return { ...state, isProfileUpdateSuccess: action.isProfileUpdateSuccess };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
const toggleIsProfileUpdateSuccess = (isProfileUpdateSuccess) => ({ type: TOGGLE_IS_PROFILE_UPDATE_SUCCESS, isProfileUpdateSuccess });

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    //
    alert("Some error occured");
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
    dispatch(toggleIsProfileUpdateSuccess(true));
  } else {
    let errorDescription = response.data.messages.length > 0 ? response.data.messages[0] : "Something went wrong - please try again!";
    //dispatch(stopSubmit("editProfileInfo", { _error: errorDescription })); // common error
    dispatch(stopSubmit("editProfileInfo", { contacts: { vk: errorDescription } })); //error of the field
    //return Promise.reject(errorDescription);
    dispatch(toggleIsProfileUpdateSuccess(false));
  }
};

/* export const updateNewPostChangeActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
} */

export default profileReducer;
