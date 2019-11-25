import React from 'react';

class TeamOverview extends React.Component {
    constructor(props) {
        super(props)
        let members = this.props.team ? this.props.team.members : [];
        let description = this.props.team ? this.props.team.description : "";
        this.state = { 
            team: {
                description: description,
                members: members,
                id: this.props.match.params.teamId
            },
            member: {
                name: "",
                email: ""
            },
            newMember: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.addMember = this.addMember.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateTeam(this.state.team);
    }

    addMember(e) {
        e.preventDefault();

        const {team, member} = this.state;
        team.members.push(member);

        this.props.updateTeam(team);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.teamId != this.props.match.params.teamId) {
            let newTeamId = this.props.match.params.teamId
            this.props.fetchTeam(newTeamId)
                .then((team) => this.setState({
                    team: {
                        description: team.description,
                        name: team.name,
                        members: team.members,
                        id: team.id
                    }
                }))
                .then(() => this.props.fetchTeams())
                // .then(() => this.props.fetchTeamMembers(newTeamId))
                // .then(() => this.props.fetchTeamMemberIds(newTeamId))
                .then(() => this.props.fetchProjects())
        }
    }

    componentDidMount() {
        let teamId = this.props.teamId
        this.props.fetchTeam(teamId)
            .then((team) => this.setState({
                team: {
                    description: team.description,
                    name: team.name,
                    members: team.members,
                    id: team.id
                }
            }))
            .then(() => this.props.fetchTeams())
            // .then(() => this.props.fetchTeamMembers(teamId))
            // .then(() => this.props.fetchTeamMemberIds(teamId))
            .then(() => this.props.fetchProjects())
    }

    toggle() {
        this.setState({ newMember: !this.state.newMember});
    }

    update(field) {
        return e => {
            if (field === 'description') {
                const teamState = this.state.team;
                teamState[field] = e.target.value;
                this.setState({
                    member: teamState
                })
            } else {
                const memberState = this.state.member;
                memberState[field] = e.target.value;
                this.setState({
                    member: memberState
                })
            }
        };
    };

    render() {
        let projectDivs = [];
        if (this.props.projects) {
            projectDivs = this.props.projects.map((project, i) => {
                if (project.team_id === this.props.match.params.teamId) {
                    return <div onClick={()=>this.props.history.push(`/projects/${project.id}`)} key={project.id} className="project-detail-item">
                        <div className={`project-icon-large-${i}`}>
                            <svg className="project-icon" viewBox="0 0 32 32">
                                <path d="M25.5,26.5H6.5A4.51,4.51,0,0,1,2,22V10A4.51,4.51,0,0,1,6.5,5.5h19A4.51,4.51,0,0,1,30,10V22A4.51,4.51,0,0,1,25.5,26.5Zm-19-18A1.5,1.5,0,0,0,5,10V22a1.5,1.5,0,0,0,1.5,1.5h19A1.5,1.5,0,0,0,27,22V10a1.5,1.5,0,0,0-1.5-1.5Z" /><rect x="21" y="11.5" width="1" height="1" /><rect x="7.5" y="11" width="2" height="2" /><path d="M10,13.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="11" width="12" height="2" /><path d="M25,13.5H12v-3H25Zm-12-1H24v-1H13Z" /><rect x="7.5" y="15" width="2" height="2" /><path d="M10,17.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="15" width="7" height="2" /><path d="M20,17.5H12v-3h8Zm-7-1h6v-1H13Z" /><rect x="7.5" y="19" width="2" height="2" /><path d="M10,21.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="19" width="10" height="2" /><path d="M23,21.5H12v-3H23Zm-10-1h9v-1H13Z" />
                            </svg>
                        </div>
                        <h4 className="recent-project-name">{project.name}</h4>
                    </div>
                }
            });
        }
        
        return <div className="team-overview">
            <div className="team-inner">
                <div className="team-left">
                    <div className="team-description">
                        <h3>Description</h3>
                        <form className="team-form">
                            <textarea
                                className="description-edit"
                                onBlur={this.handleSubmit}
                                value={this.state.team.description}
                                onChange={this.update('description')}
                                placeholder='Click to add item description...'
                            />
                        </form>
                    </div>

                    <div className="team-members">
                        <h3>Members</h3>
                        <ul> {this.state.team.members.length > 0 && (this.state.team.members.map((member, idx) => {
                                return <li key={idx} className="team-member">
                                    <div className={`member-icon-${idx}`}>
                                        {member.name.split(" ").map(name => name[0]).join("")}
                                    </div>
                                    <div className="member-info">
                                        <p>{member.name}</p>
                                        <p>{member.email}</p>
                                    </div>
                                </li>
                            })
                        )} 
                        </ul>
                        {/* <ul> {this.props.memberIds && this.props.users && (this.props.memberIds.map((id, idx) => {
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
                        </ul> */}
                        {this.state.newMember && (
                            <form onSubmit={this.addMember}>
                                <input type="text"
                                required
                                placeholder="Name"
                                value={this.state.member.name}
                                onChange={this.update('name')}
                                />
                                <input type="text"
                                required
                                placeholder="Email"
                                value={this.state.member.email}
                                onChange={this.update('email')}
                                />
                                <button>Submit</button>
                            </form>
                        )}
                        <div onClick={this.toggle} className="add-member">+ Add Member</div>
                    </div>
                </div>

                <div className="team-right">
                    <div className="team-projects">
                        <h3>Projects</h3>
                         <div className="recent-projects-list">
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
                            {this.props.projects && (projectDivs)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default TeamOverview;