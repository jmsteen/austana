import React from 'react';
import { connect } from 'react-redux';
import { closePopup } from '../../actions/popup_actions';
import { updateTask } from '../../actions/task_actions';

const mapStateToProps = ({entities: { tasks, users }, ui, session}) => {
    return {
        currentTask: tasks[ui.currentTaskId],
        currentUser: users[session.id]
    };
} ;

const mapDispatchToProps = dispatch => {
    return {
        closePopup: () => dispatch(closePopup()),
        updateTask: task => dispatch(updateTask(task))
    };
};


class TaskDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.currentTask.id,
            assignee_id: this.props.currentTask.assignee_id,
            completed: this.props.currentTask.completed,
            due_on: this.props.currentTask.due_on,
            name: this.props.currentTask.name,
            notes: this.props.currentTask.notes || "",
            project_id: this.props.currentTask.project_id,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTask(this.state)
    };

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            });
        };
    };

    render() {
        let dueDate = new Date(this.state.due_on);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
            'Sep', 'Oct', 'Nov', 'Dec'];
        dueDate = `${months[dueDate.getMonth()]}` + ` ${dueDate.getDate()}`;

        return <div className="task-detail-container">
            <div className="task-detail">
                <nav className="task-detail-nav">
                    <button>
                        <svg className="mark-task-complete" viewBox="0 0 32 32">
                            <path d="M10.9,26.2c-0.5,0-1-0.2-1.4-0.6l-6.9-6.9
                            c-0.8-0.8-0.8-2,0-2.8s2-0.8,2.8,0l5.4,5.4l16-15.9
                            c0.8-0.8,2-0.8,2.8,0s0.8,2,0,2.8L12.3,25.6
                            C11.9,26,11.4,26.2,10.9,26.2z">
                            </path>
                        </svg>
                        Mark Complete
                    </button> 
                    <svg className="task-close" viewBox="0 0 32 32" onClick={this.props.closePopup}>
                        <path 
                            d="M18.1,16L27,7.1
                            c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C
                            6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8
                            c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s
                            0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4
                            s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z">
                        </path>
                    </svg>
                </nav>
                <div className="task-detail-form-container">
                    <form 
                        className="task-detail-form" 
                        id="task-popup-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="task-form-name">
                            <textarea
                                className="edit-task-title"
                                value={this.state.name}
                                onChange={this.update('name')}
                            />
                        </div>
                        <div className="task-form-assignment">
                            <button>
                                <div className="user-logout task-initials">
                                    {this.props.currentUser.name
                                        .split(" ").map(name=>(
                                            name[0]
                                        )).join("")}
                                </div>
                                <div className="assigned-to">
                                    <p>Assigned to</p>
                                    <p>{this.props.currentUser.name}</p>
                                </div>
                                <div className="task-due-on">
                                    <svg className="cal-icon" viewBox="0 0 32 32">
                                        <path d="M24,2V1c0-0.6-0.4-1-1-1
                                        s-1,0.4-1,1v1H10V1c0-0.6-0.4-1-1-1
                                        S8,0.4,8,1v1C4.7,2,2,4.7,2,8v16
                                        c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8
                                        C30,4.7,27.3,2,24,2z M8,4v1
                                        c0,0.6,0.4,1,1,1s1-0.4,1-1V4h12v1
                                        c0,0.6,0.4,1,1,1s1-0.4,1-1V4
                                        c2.2,0,4,1.8,4,4v2H4V8C4,5.8,5.8,4,8,4z
                                        M24,28H8c-2.2,0-4-1.8-4-4V12h24v12
                                        C28,26.2,26.2,28,24,28z">
                                        </path>
                                    </svg>
                                    <div className="task-due-on-text">
                                        <p>Due On</p>
                                        <p>{dueDate}</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="task-form-notes">
                            <textarea 
                                value={this.state.notes}
                                onChange={this.update('notes')}
                                placeholder="This is where you can jot down notes
                                and further details about your task. When you finish the task, you can mark the task complete."
                            />
                        </div>
                        <div className="task-update-button-container">
                            <button className="task-update-button">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);