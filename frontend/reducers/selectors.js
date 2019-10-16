export const sortedTasksSelector = (tasks) => {
    let sortedTasks = Object.values(tasks).sort((a, b) => {
        let dateA = new Date(a.due_on)
        let dateB = new Date(b.due_on)
        return dateA - dateB;
    });
    
    return sortedTasks;
}

export const recentlyAssignedSelector = (tasks) => {
    let dayinMs = 86400000;
    let recentlyAssignedTasks = sortedTasksSelector(tasks).filter(task => {
        return new Date().getTime() - new Date(task.created_at).getTime() < dayinMs &&
            task.due_on === "2019-12-31"
    });
    return recentlyAssignedTasks;
};

export const upcomingSelector = (tasks) => {
    let daysinMs = 86400000 * 7;
    let upcomingTasks = sortedTasksSelector(tasks).filter(task => {
        return new Date(task.due_on).getTime() - new Date().getTime() < daysinMs &&
            new Date(task.due_on).getTime() - new Date().getTime() > (daysinMs / 7)
    });
    return upcomingTasks;
}

export const todaySelector = (tasks) => {
    let dayinMs = 86400000;
    let todayTasks = sortedTasksSelector(tasks).filter(task => {
        return new Date(task.due_on).getTime() - new Date().getTime() < dayinMs;
    })
    return todayTasks;
}

export const laterSelector = (tasks) => {
    
    let dayinMs = 86400000;
    let laterTasks = sortedTasksSelector(tasks).filter(task => {
        return new Date(task.due_on).getTime() - new Date().getTime() > (dayinMs * 7)
    });
    
    return laterTasks
}
