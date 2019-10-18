import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        // this.taskRef = React.createRef();
        this.state = {
            name: '',
            notes: '',
            due_on: new Date('December 31, 2019 01:15:00'),
            assignee_id: "",
            task_list_id: this.props.taskListId,
            project_id: this.props.projectId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchTaskList(this.state.task_list_id)
            .then((taskList) => this.setState({
                task_list_id: taskList.id
            }));
        this.setState({
            assignee_id: this.props.currentUser.id
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTask(this.state).then(this.props.closeModal)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value});
        }
    }

    render () {
        
        return (
            <div>
                <form className="task-form-container" onSubmit={this.handleSubmit}>
                    <div className="form-close-min">
                        <div className="close-modal" 
                        onClick={()=>this.props.closeModal()}>
                            <svg className="close-icon" viewBox="0 0 32 32">
                                <path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <input 
                        type="text"
                        placeholder='Task Name'
                        value={this.state.name}
                        ref={this.taskRef}
                        onChange={this.update('name')}
                        required
                    />
                    <div className="task-assign">
                        <p>For</p>
                        <input type="text"
                            className="task-assignee"
                            placeholder={this.props.currentUser.name}
                            disabled
                        />
                        <p>In</p>
                        <input 
                            className="task-project"   
                            placeholder={this.props.taskList && (this.props.taskList.name) || "Discovery & Planning"}
                            disabled
                        />
                    </div>
                    <textarea 
                        value={this.state.notes}
                        placeholder='Description'
                        onChange={this.update('notes')}
                    >
                    </textarea>
                    <div className="task-submit-bar">
                        <div className="task-submit-btn">
                            <button>Create Task</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }


}

export default TaskForm;