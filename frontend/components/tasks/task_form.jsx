import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        this.taskRef = React.createRef();
        this.state = {
            name: '',
            notes: '',
            due_on: new Date('December 31, 2019 01:15:00'),
            assignee_id: 4,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.taskRef.current.focus();
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
                        <div className="minimize-modal">_</div>
                        <div className="close-modal" 
                        onClick={()=>this.props.closeModal()}>X
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
                            placeholder='Patrick (Demo)'
                            disabled
                        />
                        <p>In</p>
                        <input 
                            className="task-project"
                            placeholder="Discovery & Planning"
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