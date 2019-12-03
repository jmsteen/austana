import React from 'react';
import { Link } from 'react-router-dom';

class RecentProjects extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProjects()
            .then(projects => this.props.fetchTaskLists(Object.values(projects)[0].id))
    }

    render() {
        let projectDivs = [];
        if (this.props.projects) {
           
            projectDivs = this.props.projects.map((project, i) => {
                return <div 
                    key={project.id} 
                    className="project-detail-item"
                    onClick={()=>this.props.history.push(`/projects/${project.id}`)}
                >
                    <div className={`project-icon-large-${i}`}>
                        <svg className="project-icon" viewBox="0 0 32 32">
                            <path d="M25.5,26.5H6.5A4.51,4.51,0,0,1,2,22V10A4.51,4.51,0,0,1,6.5,5.5h19A4.51,4.51,0,0,1,30,10V22A4.51,4.51,0,0,1,25.5,26.5Zm-19-18A1.5,1.5,0,0,0,5,10V22a1.5,1.5,0,0,0,1.5,1.5h19A1.5,1.5,0,0,0,27,22V10a1.5,1.5,0,0,0-1.5-1.5Z" /><rect x="21" y="11.5" width="1" height="1" /><rect x="7.5" y="11" width="2" height="2" /><path d="M10,13.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="11" width="12" height="2" /><path d="M25,13.5H12v-3H25Zm-12-1H24v-1H13Z" /><rect x="7.5" y="15" width="2" height="2" /><path d="M10,17.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="15" width="7" height="2" /><path d="M20,17.5H12v-3h8Zm-7-1h6v-1H13Z" /><rect x="7.5" y="19" width="2" height="2" /><path d="M10,21.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="19" width="10" height="2" /><path d="M23,21.5H12v-3H23Zm-10-1h9v-1H13Z" />
                        </svg>
                    </div>
                    <h4 className="recent-project-name">{project.name}</h4>
                </div>
            }).slice(0, 3);
        }

        return <div className="upcoming-tasks">
            <div className="task-list-header">
                <h3>Recent Projects</h3>
            </div>
            <div className="recent-projects-list">
               { this.props.projects && (projectDivs) }
                <div className="new-project-item" onClick={() => this.props.openPopup('projectForm')}>
                    <div className="new-project-icon-large">
                    <svg className="project-add-icon" viewBox="0 0 32 32">
                        <path d="M16,31.89L16,31.89c-0.96,0-1.73-0.78-1.73-1.73V1.84c0-0.96,0.78-1.73,1.73-1.73h0c0.96,0,1.73,0.78,1.73,1.73v28.32
                            C17.73,31.12,16.96,31.89,16,31.89z"/>
                        <path d="M31.89,16L31.89,16c0,0.91-0.74,1.65-1.65,1.65H1.75c-0.91,0-1.65-0.74-1.65-1.65v0c0-0.91,0.74-1.65,1.65-1.65h28.49
                            C31.16,14.35,31.89,15.09,31.89,16z"/>
                    </svg>
                </div>
                <h4 className="recent-project-name">New Project</h4>
                </div>
            </div>
            </div>
    }
}

export default RecentProjects;