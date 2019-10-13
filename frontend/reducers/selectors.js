const upcomingTasksSelector = (tasks) => {
    let sortedTasks = Object.values(tasks).sort((a, b) => {
        let dateA = new Date(a.due_on)
        let dateB = new Date(b.due_on)
        return dateA - dateB;
    });
    
    return sortedTasks;
}

export default upcomingTasksSelector;