export const sortedTasksSelector = (tasks) => {
    let sortedTasks = Object.values(tasks).sort((a, b) => {
        let dateA = new Date(a.due_on)
        let dateB = new Date(b.due_on)
        return dateA - dateB;
    });
    
    return sortedTasks;
}

export const completedSelector = (tasks) => {
    let completedTasks = sortedTasksSelector(tasks).filter(task => {
        return task.completed
    });
    return completedTasks;
};

export const recentlyAssignedSelector = (tasks) => {
    let dayinMs = 86400000;
    let recentlyAssignedTasks = sortedTasksSelector(tasks).filter(task => {
        return new Date().getTime() - new Date(task.created_at).getTime() < dayinMs &&
            task.due_on === "2019-12-31" && !completedSelector(tasks).includes(task)
    });
    return recentlyAssignedTasks;
};

export const upcomingSelector = (tasks) => {
    let daysinMs = 86400000 * 7;
    let upcomingTasks = sortedTasksSelector(tasks).filter(task => {
        return new Date(task.due_on).getTime() - new Date().getTime() < daysinMs &&
            new Date(task.due_on).getTime() - new Date().getTime() > (daysinMs / 7) &&
            !completedSelector(tasks).includes(task)
    });
    return upcomingTasks;
}

export const todaySelector = (tasks) => {
    let dayinMs = 86400000;
    let todayTasks = sortedTasksSelector(tasks).filter(task => {
        return new Date(task.due_on).getTime() - new Date().getTime() < dayinMs && !completedSelector(tasks).includes(task);
    })
    return todayTasks;
}

export const laterSelector = (tasks) => {
    
    let dayinMs = 86400000;
    let laterTasks = sortedTasksSelector(tasks).filter(task => {
        return new Date(task.due_on).getTime() - new Date().getTime() > (dayinMs * 7) &&
            !recentlyAssignedSelector(tasks).includes(task) && !completedSelector(tasks).includes(task)
    });
    
    return laterTasks
}
