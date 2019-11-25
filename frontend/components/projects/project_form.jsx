import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
  
        this.state = {
            name: "",
            due_on: new Date('12/31/2019'),
            team_id: "",
            notes: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createProject(this.state)
    };

    componentDidMount() {
        this.setState({
            team_id: this.props.team.id
        })
    }

    update(field) {
            return (e) => {
                this.setState({
                    [field]: e.target.value
                });
            };
    };

    render() {

        return <div className="task-detail-container">
            <div className="new-project-form">
                <nav className="task-detail-nav">
                    <h2 className="new-team-title">Add project details</h2>
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
                        className="new-team-form" 
                        id="task-popup-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="new-project-form-name">
                            <label>Project name
                                <br/>
                                <input
                                    className="new-project-form-input"
                                    required
                                    type="text"
                                    placeholder="For example, 'Austana App Launch' or 'Implement Kubernetes'..."
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                />
                            </label>    
                            <label>Team
                                <br/>
                                <select
                                    className="new-project-select"
                                    required
                                    placeholder="For example, 'Austana App Launch' or 'Implement Kubernetes'..."
                                    >
                                    <option value={this.props.team && this.props.team.id}>{this.props.team && (this.props.team.name)}</option> 
                                </select>
                            </label>
                        </div>
                        <div className="team-form-name">
                            <label>Description
                                <br/>
                                <input
                                    type="text"
                                    placeholder="Complete MVP features and test beta with initial users"
                                    value={this.state.notes}
                                    onChange={this.update('notes')}
                                />
                            </label>
                        </div>
                        
                        <div className="task-update-button-container">
                            <button className="task-update-button">Create project</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
};

export default ProjectForm;