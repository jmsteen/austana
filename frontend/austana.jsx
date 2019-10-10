import ReactDOM from 'react-dom';
import React from 'react';
import Root from './root';
import configureStore from './store/store';
import * as TaskActions from './actions/task_actions'

// let sampleTask = {
//     due_on: Date.now,
//     name: 'Sample task',
//     start_on: Date.now,
//     assignee_id: 2,
//     project_id: 2,
//     task_list_id: 4
// }

window.TaskActions = TaskActions;

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
