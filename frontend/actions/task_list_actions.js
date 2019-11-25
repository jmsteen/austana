import * as TaskListApiUtil from '../util/task_list_api_util';

export const RECEIVE_TASK_LISTS = 'RECEIVE_TASK_LISTS';
export const RECEIVE_TASK_LIST = 'RECEIVE_TASK_LIST';

const receiveTaskLists = taskLists => {
    return {
        type: RECEIVE_TASK_LISTS,
        taskLists
    };
};

const receiveTaskList = taskList => {
    return {
        type: RECEIVE_TASK_LIST,
        taskList
    };
};


export const fetchTaskLists = (projectId) => dispatch => {
    
    return TaskListApiUtil.fetchTaskLists(projectId)
        .then(taskLists => dispatch(receiveTaskLists(taskLists)));
};

export const fetchTaskList = id => dispatch => {
    
    return TaskListApiUtil.fetchTaskList(id)
        .then(taskList=> {
            dispatch(receiveTaskList(taskList))
            return taskList
        });
}

export const updateTaskList = (taskList) => dispatch => {
    return TaskListApiUtil.updateTaskList(taskList)
        .then(taskList => dispatch(receiveTaskList(taskList)));
};
