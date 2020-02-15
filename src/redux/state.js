import { reRenderEntireTree } from "../render";

let substance = {
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
        ]
    }
};

window.substance = substance;

export let addPost = () => {
    let newPost = {
        id: 7,
        message: substance.profilePage.newPostText,
        likeCount: 0
    };
    substance.profilePage.posts.push(newPost);
    reRenderEntireTree(substance);
}

export let updateNewPostText = (newText) => {    
    substance.profilePage.newPostText = newText;
    reRenderEntireTree(substance);
}

export let addMessage = (typedMessage) => {
    let newMessage = {
        id: 7,
        message: typedMessage
    };
    substance.dialogsPage.messages.push(newMessage);
    reRenderEntireTree(substance);
}

export default substance;
