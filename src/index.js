import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

let reRenderEntireTree = (substance) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
            substance={substance} 
            dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root'));
}

reRenderEntireTree(store.getState());

let reRenderEntireTreeWithState = () =>{
    let state = store.getState();
    reRenderEntireTree(state);
}
store.subscribe(reRenderEntireTreeWithState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
