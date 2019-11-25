import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentTask, updateTask } from '../../actions/task_actions';
import { openPopup } from '../../actions/popup_actions';

const mapDispatchToProps = dispatch => {
    return {
        openTask: () => dispatch(openPopup('taskDetail')),
        fetchCurrentTask: id => dispatch(fetchCurrentTask(id)),
        updateTask: task => dispatch(updateTask(task))
    };
};

class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.markComplete = this.markComplete.bind(this);
    }

    markComplete () {
        this.props.updateTask({
            completed: !this.props.task.completed,
            id: this.props.task.id
        });
    }

    handleClick(e) {
            if (e.target.classList[0] !== 'checkmark') {
                this.props.fetchCurrentTask(this.props.task.id);
                this.props.openTask();
            }
    }

    render() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday"];
        let date = new Date(this.props.task.due_on)
        
        return <li className="upcoming-task-li"
            onClick={this.handleClick}>
            {/* onClick={() => this.handleClick(this.props.task.id)}> */}
            <div>
                <div className="emoji">{this.props.emoji}</div>
                    <svg className="checkmark" 
                        onClick={this.markComplete}
                        id={this.props.task.completed ? 'checkmark-complete' : undefined}
                        viewBox="0 0 32 32">
                        {/* <path d="M10.9,26.2c-0.5,0-1-0.2-1.4-0.6l-6.9-6.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l5.4,5.4l16-15.9c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L12.3,25.6C11.9,26,11.4,26.2,10.9,26.2z">
                        </path> */}
                        <g>
                        <g>
                            <line x1="3.28" y1="18.95" x2="13" y2="26.37"/>
                            <path d="M2.44,20.4c2.83,2.16,5.66,4.32,8.49,6.48c0.41,0.31,0.82,0.62,1.23,0.94c0.7,0.53,1.9,0.13,2.29-0.6
                                c0.47-0.88,0.15-1.72-0.6-2.29c-2.83-2.16-5.66-4.32-8.49-6.48c-0.41-0.31-0.82-0.62-1.23-0.94c-0.7-0.53-1.9-0.13-2.29,0.6
                                C1.37,18.99,1.69,19.83,2.44,20.4L2.44,20.4z"/>
                        </g>
                        <g>
                            <line x1="28.69" y1="5.6" x2="13" y2="26.37"/>
                            <path d="M27.25,4.76c-1.77,2.34-3.54,4.69-5.32,7.03c-2.81,3.72-5.63,7.44-8.44,11.17c-0.65,0.86-1.29,1.71-1.94,2.57
                                c-0.53,0.7-0.13,1.9,0.6,2.29c0.88,0.47,1.72,0.15,2.29-0.6c1.77-2.34,3.54-4.69,5.32-7.03c2.81-3.72,5.63-7.44,8.44-11.17
                                c0.65-0.86,1.29-1.71,1.94-2.57c0.53-0.7,0.13-1.9-0.6-2.29C28.66,3.69,27.81,4.01,27.25,4.76L27.25,4.76z"/>
                        </g>
                    </g>
                    </svg>
                <p>{this.props.task.name}</p>
            </div>
            <p>
                {days[date.getDay()] + ', ' +
                    (date.getMonth() + 1) + ' / ' +
                    (date.getDate() + 1)}
            </p>
        </li>
    }
}

export default connect (null, mapDispatchToProps)(TaskItem);