import React from 'react';
import TaskSection from './task_section';

class Tasks extends React.Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchTasks();
    }

    handleClick() {
        this.props.createTask('taskForm');
    }

    render () {
        const completedTasks = this.props.completedTasks || [];
        const recentlyAssignedTasks = this.props.recentlyAssignedTasks || [];
        const upcomingTasks = this.props.upcomingTasks || [];
        const todayTasks = this.props.todayTasks || [];
        const laterTasks = this.props.laterTasks || [];
        
        // const completedTasks = this.props.tasks.filter(task=>task.completed);
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
            <div className="tasks-container disable-text">
                <div className="tasks-index">
                    <header className="add-task-index">
                        <button 
                            className="task-update-button"
                            onClick={this.handleClick}
                        >
                            Add Task
                        </button>
                    </header>
                        <TaskSection 
                            type={'recently-assigned'}
                            tasks={recentlyAssignedTasks}
                        />
                        <TaskSection type={'today'}
                            tasks={todayTasks}
                        />
                        <TaskSection type={'upcoming'}
                            tasks={upcomingTasks}
                        />
                        <TaskSection type={'later'}
                            tasks={laterTasks}
                        />
                        <TaskSection type={'completed'}
                            tasks={completedTasks}
                        />
                </div>
            </div>
        </div>
    }
    

}


export default Tasks;