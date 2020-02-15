import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, addMessage, updateNewPostText } from './redux/state';

export let reRenderEntireTree = (substance) => {
    ReactDOM.render(
        <BrowserRouter>
            <App substance={substance} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} />
        </BrowserRouter>,
        document.getElementById('root'));
}

