import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTeamMembers, fetchTeamMemberIds } from '../../actions/team_actions';
import { openPopup } from '../../actions/popup_actions';

const msp = ({entities: { teams, users }}, ownProps) => {
    
    const team = teams[ownProps.match.params.teamId];
    const memberIds = team ? team.memberIds : [];

    return {
        teams,
        users,
        memberIds
    }
};

const mdp = (dispatch, ownProps) => {
   return {
       fetchTeamMembers: (id) => dispatch(fetchTeamMembers(id)),
       fetchTeamMemberIds: id => dispatch(fetchTeamMemberIds(id)),
       openPopup: type => dispatch(openPopup(type))
   };
};


class TeamDetailSidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
        this.toggle = this.toggle.bind(this);
    };

    componentDidMount() {
        this.props.fetchTeamMembers(this.props.team.id)
            .then(this.props.fetchTeamMemberIds(this.props.team.id));
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
        
        let icon = document.getElementById('side-open-team');
        icon.classList.toggle('team-icon-arrow-rotate');
    };

    render () {
        let sideMembers

        if(this.props.team.memberIds) {
            sideMembers = this.props.team.memberIds.map((id, idx) => {
                return <div key={idx} className={`side-team-member-${idx}`}>
                    {this.props.users[id].name.split(" ").map(name => name[0]).join("")}
                </div>
            });
        }

        return <div>
                    <div className="side-team-open-detail" 
                    >
                        <svg 
                            onClick={this.toggle}
                            className="team-icon-arrow" 
                            viewBox="0 0 24 24" 
                            id="side-open-team"
                        >
                            <path d="M17.5,10.7l-7.1-7.1
                            C10,3.2,9.4,3,8.8,3.3
                            c-0.6,0.2-1,0.8-1,1.4v14.9
                            c0,0.6,0.4,1.2,1,1.4c0.2,0.1,0.4,0.1,0.6,0.1
                            c0.4,0,0.8-0.2,1.1-0.5l7.1-7.1
                            c0.4-0.4,0.6-0.9,0.6-1.5
                            S17.9,11.1,17.5,10.7z"></path>
                        </svg>
                        <h3 
                            className="side-team-name"
                            onClick={()=>(
                                this.props.history.push(`/teams/${this.props.team.id}`)
                            )}
                            >{this.props.team.name}
                        </h3>
                    </div>

                    {this.state.open && (
                        <div className="side-team-container">
                            <div className="side-team-members">
                                {this.props.team && sideMembers}
                                <div className="side-all-members">
                                    <p>All Members</p>
                                </div>
                            </div>

                            <div className="side-create-project">
                                <svg className="team-icon-plus" viewBox="0 0 24 24">
                                    <path 
                                        d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6
                                        c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6
                                        c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4
                                        c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z">
                                    </path>
                                </svg>
                        <p onClick={()=>this.props.openPopup('projectForm')}>Create a Project</p>
                            </div>

                        </div>
                    )}
                    
                </div>
    }
}

export default withRouter(connect(msp, mdp)(TeamDetailSidebar));