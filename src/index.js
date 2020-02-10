import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
];

let posts = [
    {id: 1, message: 'Hi! Are you OK?', likeCount: 5},
    {id: 2, message: 'I am fine', likeCount: 3},
    {id: 3, message: 'And what about you?', likeCount: 1},
    {id: 4, message: 'I am fine also', likeCount: 7},
    {id: 5, message: 'We are fine today', likeCount: 2},
    {id: 6, message: 'This is the wondeful world!', likeCount: 30}
  ];

  let messages = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I am fine!' },
    { id: 4, message: '(tattered cat)' },
    { id: 5, message: 'And how are you?' },
    { id: 6, message: 'I am fine also' }
];

ReactDOM.render(<App dialogs={dialogs} posts={posts} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
