import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import substance from './redux/state';
import { addPost, addMessage, updateNewPostText, subscribe } from './redux/state';

let reRenderEntireTree = (substance) => {
    ReactDOM.render(
        <BrowserRouter>
            <App substance={substance} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} />
        </BrowserRouter>,
        document.getElementById('root'));
}

reRenderEntireTree(substance);

subscribe(reRenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
