import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import teamsReducer from './teams_reducer';
import projectsReducer from './projects_reducer';
import taskListsReducer from './task_lists_reducer';

export default combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    teams: teamsReducer,
    projects: projectsReducer,
    taskLists: taskListsReducer
});
