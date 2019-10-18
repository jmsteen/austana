import {
    RECEIVE_TASK_LISTS,
    RECEIVE_TASK_LIST,
} from '../actions/task_list_actions';
import merge from 'lodash/merge'

const taskListsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TASK_LISTS:
            return action.taskLists;
        case RECEIVE_TASK_LIST:
            return merge({}, state, { [action.taskList.id]: action.taskList });
        default:
            return state;
    };
};

export default taskListsReducer;