import React from 'react';

class UpcomingTasks extends React.Component {
    constructor(props) {
        super(props)
    }

    // NOTE: update taskListId to be dynamic
    componentDidMount() {
        this.props.fetchTasks(5)
    }

    render () {
            
        const taskLis = this.props.upcomingTasks.map((task, i) => {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday"];
            let date = new Date(task.due_on)

            return <li key={i}>
                <div>
                    <img className="checkmark" src={window.checkmark} alt=""/>
                    <p>{task.name}</p>
                </div>
                <p>
                    {days[date.getDay()] + ', ' + 
                    date.getMonth() + ' / ' +
                     date.getDate()}
                </p>
            </li>
        })
        
        return <div className="upcoming-tasks">
            <h3>Tasks Due Soon</h3>
            <ul className="home-task-list"> { taskLis } </ul>
        </div>
    }
}

export default UpcomingTasks;