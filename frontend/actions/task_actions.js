import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const RECEIVE_CURRENT_TASK = 'RECEIVE_CURRENT_TASK'
export const REMOVE_TASK = 'REMOVE_TASK';

const receiveAllTasks = tasks => {
    return {
        type: RECEIVE_ALL_TASKS,
        tasks
    };
};

const receiveTask = task => {
    return {
        type: RECEIVE_TASK,
        task
    };
};

const receiveCurrentTask = taskId => {
    return {
        type: RECEIVE_CURRENT_TASK,
        taskId
    };
};

const removeTask = task => {
    return {
        type: REMOVE_TASK,
        taskId: task.id
    };
};

export const fetchTasks = () => dispatch => {
    return TaskApiUtil.fetchTasks()
        .then(tasks => dispatch(receiveAllTasks(tasks)));
};

export const fetchTask = (id) => dispatch => {
    return TaskApiUtil.fetchTask(id)
        .then(task => dispatch(receiveTask(task)));
};

export const fetchCurrentTask = taskId => dispatch => {
    return dispatch(receiveCurrentTask(taskId));
};

export const createTask = (task) => dispatch => {
    return TaskApiUtil.createTask(task)
        .then(task => dispatch(receiveTask(task)));
};

export const updateTask = (task) => dispatch => {
    return TaskApiUtil.updateTask(task)
        .then(task => dispatch(receiveTask(task)));
};

export const deleteTask = (id) => dispatch => {
    return TaskApiUtil.fetchTask(id)
        .then(task => dispatch(removeTask(task)));
};