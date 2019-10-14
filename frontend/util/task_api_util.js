export const fetchTasks = () => {
    return $.ajax({
        method: 'GET',
        url: `api/tasks`,
        error: err => console.log(err)
    });
};

export const fetchTask = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/tasks/${id}`,
        error: err => console.log(err)
    });
}

export const createTask = (task) => {
    return $.ajax({
        method: 'POST',
        url: `api/tasks`,
        data: { task },
        error: err => console.log(err)
    });
}

export const updateTask = (task) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/tasks/${task.id}`,
        data: { task },
        error: err => console.log(err)
    });
}

export const deleteTask = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/tasks/${id}`,
        error: err => console.log(err)
    });
}