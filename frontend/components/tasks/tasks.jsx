import React from 'react';

class Tasks extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTasks();
    }

    render () {
        const completedTasks = this.props.tasks.filter(task=>task.completed);
        let completedMessage
        if (completedTasks.length < 1) {
            completedMessage = 'No tasks have been completed yet.'
        } else if (completedTasks.length === 1) {
            completedMessage = '1 task completed this week.'
        } else {
            completedMessage = `${completedTasks.length} tasks completed this week.`
        }

        return <div className="tasks">
            <div className="status-header">
                {completedMessage}
            </div>
            <div className="tasks-container">

            </div>
        </div>
    }
    

}


export default Tasks;