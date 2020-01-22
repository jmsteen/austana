import ReactDOM from 'react-dom';
import React from 'react';
import Root from './root';
import configureStore from './store/store';

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
   
    ReactDOM.render(<Root store={store}/>, root)
});
