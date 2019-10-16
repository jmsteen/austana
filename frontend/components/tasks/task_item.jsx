import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentTask } from '../../actions/task_actions';
import { openPopup } from '../../actions/popup_actions';

const mapDispatchToProps = dispatch => {
    return {
        openTask: () => dispatch(openPopup('taskDetail')),
        fetchCurrentTask: id => dispatch(fetchCurrentTask(id))
    };
};

class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.fetchCurrentTask(id);
        this.props.openTask();
    }

    render() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday"];
        let date = new Date(this.props.task.due_on)
        
        return <li className="upcoming-task-li"
            onClick={() => this.handleClick(this.props.task.id)}>
            <div>
                <div className="emoji">{this.props.emoji}</div>
                    <svg className="checkmark" viewBox="0 0 32 32">
                        <path d="M10.9,26.2c-0.5,0-1-0.2-1.4-0.6l-6.9-6.9c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l5.4,5.4l16-15.9c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L12.3,25.6C11.9,26,11.4,26.2,10.9,26.2z">
                        </path>
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