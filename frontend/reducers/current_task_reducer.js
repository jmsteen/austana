import {
    RECEIVE_CURRENT_TASK,
} from '../actions/task_actions';

const _nullTask = Object.freeze(null);

const currentTaskReducer = (state = _nullTask, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_TASK:
            return action.taskId;
        default:
            return state;
    }
};

export default currentTaskReducer;