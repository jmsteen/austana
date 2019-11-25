export const fetchTaskLists = (projectId) => {
    return $.ajax({
        method: 'GET',
        url: `api/projects/${projectId}/task_lists`
    });
};

export const fetchTaskList = id => {
    return $.ajax({
        method: 'GET',
        url: `api/task_lists/${id}`
    });
};

export const updateTaskList = taskList => {
    return $.ajax({
        method: 'PATCH',
        url: `api/task_lists/${taskList.id}`
    });
};