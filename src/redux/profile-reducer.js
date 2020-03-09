const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostChangeActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;
