import React from 'react';

class UpcomingTasks extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    
    componentDidMount() {
        this.props.fetchTasks()
    }

    handleClick(id) {
        this.props.fetchCurrentTask(id);
        this.props.openTask();
    }

    render () {
            
        const taskLis = this.props.upcomingTasks.map((task, i) => {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday"];
            let date = new Date(task.due_on)
            let emojis = ['🎉', '👩‍💻', '📋']
            return <li className="upcoming-task-li" 
                onClick={()=>this.handleClick(task.id)} key={i}>
                <div>
                    <img className="checkmark" src={window.checkmark} alt=""/>
                    <div className="emoji">{emojis[i]}</div>
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
            <ul className="home-task-list"> 
                { taskLis } 
            </ul>
        </div>
    }
}

export default UpcomingTasks;