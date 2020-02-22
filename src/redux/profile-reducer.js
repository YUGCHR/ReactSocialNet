const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi! Are you OK?', likeCount: 5 },
        { id: 2, message: 'I am fine', likeCount: 3 },
        { id: 3, message: 'And what about you?', likeCount: 1 },
        { id: 4, message: 'I am fine also', likeCount: 7 },
        { id: 5, message: 'We are fine today', likeCount: 2 },
        { id: 6, message: 'This is the wondeful world!', likeCount: 30 }
    ],
    newPostText: 'Type your new post here'
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;            
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;            
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostChangeActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;
