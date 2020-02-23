import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from './StoreContext';

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}
//state={state} store={store} dispatch={store.dispatch.bind(store)} - were props for App

reRenderEntireTree(store.getState());

let reRenderEntireTreeWithState = () => {
    let state = store.getState();
    reRenderEntireTree(state);
}
store.subscribe(reRenderEntireTreeWithState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
