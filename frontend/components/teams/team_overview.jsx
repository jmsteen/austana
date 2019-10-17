import React from 'react';

class TeamOverview extends React.Component {
    constructor(props) {
        super(props)
        
        let description = this.props.team ? this.props.team.description : ""
        this.state = { 
            description: description
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTeam(this.state);
    }

    componentDidMount() {
        this.props.fetchTeams()
            .then(()=>this.props.fetchTeamMembers(this.props.team.id))
            .then(()=>this.props.fetchTeamMemberIds(this.props.team.id))
            .then(()=>this.setState({
                description: this.props.team.description,
                id: this.props.team.id,
                name: this.props.team.name}))
    }

    update() {
        return e => {
            this.setState({['description']: e.target.value})
        };
    };

    render() {
        

        return <div className="team-overview">
            <div className="team-inner">
                <div className="team-left">
                    <div className="team-description">
                        <h3>Description</h3>
                        <form className="team-form">
                            <textarea
                                className="description-edit"
                                onBlur={this.handleSubmit}
                                value={this.state.description}
                                onChange={this.update()}
                                placeholder='Click to add item description...'
                            />
                        </form>
                    </div>

                    <div className="team-members">
                        <h3>Members</h3>
                        <ul> {this.props.memberIds && (this.props.memberIds.map((id, idx) => {
                                return <li key={id} className="team-member">
                                    <div className={`member-icon-${idx}`}>
                                        {this.props.users[id].name.split(" ").map(name => name[0]).join("")}
                                    </div>
                                    <div className="member-info">
                                        <p>{this.props.users[id].name}</p>
                                        <p>{this.props.users[id].email}</p>
                                    </div>
                                </li>
                            })
                        )} 
                        </ul>
                    </div>
                </div>

                <div className="team-right">
                    <div className="team-projects">
                        <h3>Projects</h3>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default TeamOverview;