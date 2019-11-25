import React from 'react';

class TeamForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                name: "",
                description: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTeam(this.state)
    };

    update(field) {
            return (e) => {
                this.setState({
                    [field]: e.target.value
                });
            };
    };

    render() {

        return <div className="task-detail-container">
            <div className="task-detail">
                <nav className="task-detail-nav">
                    <h2 className="new-team-title">Create new team</h2>
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
                        <div className="team-form-name">
                            <label>Team name
                                <br/>
                                <input
                                    type="text"
                                    placeholder="For example, 'Marketing' or 'Design'..."
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                />
                            </label>
                        </div>
                        <div className="team-form-description">
                            <label>Description
                                <br/>
                                <textarea
                                    placeholder="What are this team's primary responsibilities?"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                />
                            </label>
                        </div>
                        
                        <div className="task-update-button-container">
                            <button className="task-update-button">Create Team</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }
};

export default TeamForm;