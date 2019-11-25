import React from 'react';
import TaskItem from './task_item'
import { Link } from 'react-router-dom';

class UpcomingTasks extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchTasks()
    }

    render () {
        let emojis = ['🎉', '👩‍💻', '📋']
        const taskLis = this.props.upcomingTasks.map((task, i) => {
            return <TaskItem task={task} emoji={emojis[i]} key={i}/>
        })
        
        return <div className="upcoming-tasks">
            <div className="task-list-header">
                <h3>Tasks Due Soon</h3>
                <Link to='/tasks'>See all my tasks</Link> 
            </div>
            <ul className="home-task-list"> 
                { taskLis } 
            </ul>
        </div>
    }
}

export default UpcomingTasks;