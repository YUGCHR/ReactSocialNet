import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

    dispatch(action) {

        this._substance.profilePage = profileReducer(this._substance.profilePage, action);
        this._substance.dialogsPage = dialogsReducer(this._substance.dialogsPage, action);

        this._callSubscriber(this._substance);
    }
}

window.store = store;

export default store;
