import React from 'react';

class ProjectOverview extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
        this.props.fetchProject(this.props.match.params.projectId)
            .then(() => this.props.fetchTaskLists(this.props.project.id));
    }

    render() {
       
        return <div className="tasks">
            <div className="status-header">
                
            </div>
            <div className="tasks-container disable-text">
                <div className="tasks-index">
                    <header className="add-task-index">
                        <button
                            className="task-update-button"
                            // onClick={this.handleClick}
                        >
                            Add Task
                        </button>
                    </header>
                   
                </div>
            </div>
        </div>
    }


}


export default ProjectOverview;