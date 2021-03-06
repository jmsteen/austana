import {
    RECEIVE_ALL_TASKS,
    RECEIVE_TASK,
    REMOVE_TASK
} from '../actions/task_actions';
import merge from 'lodash/merge'

const tasksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_TASKS:
            return action.tasks;
        case RECEIVE_TASK:
            return merge({}, state, { [action.task.id]: action.task} );
        case REMOVE_TASK:
            let newState = merge({}, oldState);
            delete newState[action.taskId];
            return newState;
        default:
            return state;
    };
};

export default tasksReducer;