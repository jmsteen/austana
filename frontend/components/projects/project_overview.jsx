import React from 'react';

class ProjectOverview extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      
        this.props.fetchProject(this.props.match.params.projectId)
            .then(() => this.props.fetchTaskLists(this.props.project.id))
            .then(()=> this.props.fetchTasks());
    }

    handleClick(id) {
        this.props.fetchCurrentTask(id);
        this.props.openPopup();
    }

    render() {
        
        const filteredtasks = (taskListId) => {
            
            if (this.props.tasks.length > 0) {
                return this.props.tasks.filter(task => {
                    return task.task_list_id === taskListId
                });
            };
        };

        const taskLis = taskListId => {
                
                return filteredtasks(taskListId).map(task=>{
                    return <li className="project-task" key={task.id} onClick={()=>this.handleClick(task.id)}>
                        {task.name}
                    </li>
                });
        };
      
        return <div className="tasks">
            
            <div className="projects-container disable-text">
                <div className="task-list-container">
                    <div className="project-task-list-header">
                        {this.props.taskLists.length > 0 && (
                            this.props.taskLists[0].name)}
                    </div>
                   <div className="task-list">

                        {this.props.tasks.length > 0 && this.props.taskLists.length > 0 && (
                            <ul>
                                <li className="project-task" id="new-project-task" onClick={() => this.props.openModal('taskForm', this.props.project.id, this.props.taskLists[0].id)}>
                                    <svg className="small-project-add-icon" viewBox="0 0 32 32"><path d="M16,31.89L16,31.89c-0.96,0-1.73-0.78-1.73-1.73V1.84c0-0.96,0.78-1.73,1.73-1.73h0c0.96,0,1.73,0.78,1.73,1.73v28.32 C17.73,31.12,16.96,31.89,16,31.89z"></path><path d="M31.89,16L31.89,16c0,0.91-0.74,1.65-1.65,1.65H1.75c-0.91,0-1.65-0.74-1.65-1.65v0c0-0.91,0.74-1.65,1.65-1.65h28.49 C31.16,14.35,31.89,15.09,31.89,16z"></path></svg>
                                </li>
                                {taskLis(this.props.taskLists[0].id) }
                            </ul>
                        )} 
                   </div>
                </div>
                <div className="task-list-container">
                    <div className="project-task-list-header">
                        {this.props.taskLists[1] && (this.props.taskLists[1].name)}
                    </div>
                   <div className="task-list">
                        {this.props.tasks.length > 0 && this.props.taskLists[1] && (
                            <ul>
                                <li className="project-task" id="new-project-task" onClick={() => this.props.openModal('taskForm', this.props.project.id, this.props.taskLists[1].id)}>
                                    <svg className="small-project-add-icon" viewBox="0 0 32 32"><path d="M16,31.89L16,31.89c-0.96,0-1.73-0.78-1.73-1.73V1.84c0-0.96,0.78-1.73,1.73-1.73h0c0.96,0,1.73,0.78,1.73,1.73v28.32 C17.73,31.12,16.96,31.89,16,31.89z"></path><path d="M31.89,16L31.89,16c0,0.91-0.74,1.65-1.65,1.65H1.75c-0.91,0-1.65-0.74-1.65-1.65v0c0-0.91,0.74-1.65,1.65-1.65h28.49 C31.16,14.35,31.89,15.09,31.89,16z"></path></svg>
                                </li>
                                {taskLis(this.props.taskLists[1].id)}
                            </ul>
                        )}  
                   </div>
                </div>
                <div className="task-list-container">
                    <div className="project-task-list-header">
                        {this.props.taskLists[2] && (this.props.taskLists[2].name)}
                    </div>
                   <div className="task-list">
                        {this.props.tasks.length > 0 && this.props.taskLists[2] && (
                            <ul>
                                <li className="project-task" id="new-project-task" onClick={() => this.props.openModal('taskForm', this.props.project.id, this.props.taskLists[2].id)}>
                                    <svg className="small-project-add-icon" viewBox="0 0 32 32"><path d="M16,31.89L16,31.89c-0.96,0-1.73-0.78-1.73-1.73V1.84c0-0.96,0.78-1.73,1.73-1.73h0c0.96,0,1.73,0.78,1.73,1.73v28.32 C17.73,31.12,16.96,31.89,16,31.89z"></path><path d="M31.89,16L31.89,16c0,0.91-0.74,1.65-1.65,1.65H1.75c-0.91,0-1.65-0.74-1.65-1.65v0c0-0.91,0.74-1.65,1.65-1.65h28.49 C31.16,14.35,31.89,15.09,31.89,16z"></path></svg>
                                </li>
                                {taskLis(this.props.taskLists[2].id)}
                            </ul>
                        )}  
                   </div>
                </div>
                <div className="task-list-container">
                    <div className="project-task-list-header">
                        {this.props.taskLists[3] && this.props.taskLists.length > 0 && (this.props.taskLists[3].name)}
                    </div>
                   <div className="task-list">
                        {this.props.tasks.length > 0 && this.props.taskLists[3] && (
                            <ul>
                                <li className="project-task" id="new-project-task" onClick={() => this.props.openModal('taskForm', this.props.project.id, this.props.taskLists[3].id)}>
                                    <svg className="small-project-add-icon" viewBox="0 0 32 32"><path d="M16,31.89L16,31.89c-0.96,0-1.73-0.78-1.73-1.73V1.84c0-0.96,0.78-1.73,1.73-1.73h0c0.96,0,1.73,0.78,1.73,1.73v28.32 C17.73,31.12,16.96,31.89,16,31.89z"></path><path d="M31.89,16L31.89,16c0,0.91-0.74,1.65-1.65,1.65H1.75c-0.91,0-1.65-0.74-1.65-1.65v0c0-0.91,0.74-1.65,1.65-1.65h28.49 C31.16,14.35,31.89,15.09,31.89,16z"></path></svg>
                                </li>
                                {taskLis(this.props.taskLists[3].id)}
                            </ul>
                        )} 
                   </div>
                </div>
            </div>
        </div>
    }


}


export default ProjectOverview;