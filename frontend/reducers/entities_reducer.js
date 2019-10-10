import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';

export default combineReducers({
    users: usersReducer,
    tasks: tasksReducer
});
