const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _substance: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi! Are you OK?', likeCount: 5 },
                { id: 2, message: 'I am fine', likeCount: 3 },
                { id: 3, message: 'And what about you?', likeCount: 1 },
                { id: 4, message: 'I am fine also', likeCount: 7 },
                { id: 5, message: 'We are fine today', likeCount: 2 },
                { id: 6, message: 'This is the wondeful world!', likeCount: 30 }
            ],
            newPostText: 'Type your new post here'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I am fine!' },
                { id: 4, message: '(tattered cat)' },
                { id: 5, message: 'And how are you?' },
                { id: 6, message: 'I am fine also' }
            ],
            newMessageText: 'Type new message here'
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._substance;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
            id: 7,
            message: this._substance.profilePage.newPostText,
            likeCount: 0
        };
        this._substance.profilePage.posts.push(newPost);
        this._substance.profilePage.newPostText = '';
        this._callSubscriber(this._substance);
    },
    _updateNewPostText(newText) {
        this._substance.profilePage.newPostText = newText;
        this._callSubscriber(this._substance);
    },
    _addMessage() {
        let newMessage = {
            id: 7,
            message: this._substance.dialogsPage.newMessageText
        };
        this._substance.dialogsPage.messages.push(newMessage);
        this._substance.dialogsPage.newMessageText = '';
        this._callSubscriber(this._substance);
    },
    _updateNewMessageText(newText) {
        this._substance.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._substance);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        }
        else if (action.type === ADD_MESSAGE) {
            this._addMessage(action.newText);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText);
        }
    }
}

window.store = store;

export default store;
