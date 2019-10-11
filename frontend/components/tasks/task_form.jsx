import React from 'react';

class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            notes: "",
            due_on: new Date('December 31, 2019 01:15:00'),
            assignee_id: this.props.currentUser.id,
        }
    }

    render () {
        return (
            <div className="new-task-form">
                <form>
                    
                </form>
            </div>
        )
    }


}

export default TaskForm;