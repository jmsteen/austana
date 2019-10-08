import ReactDOM from 'react-dom';
import React from 'react';
import Root from './root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions';

window.login = login;
window.logout = logout;
window.signup = signup;

document.addEventListener("DOMContentLoaded", ()=>{
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser },
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    const root = document.getElementById('root');
   
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store}/>, root)
});
