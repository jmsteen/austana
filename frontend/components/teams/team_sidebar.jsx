import React from 'react';
import TeamDetailSidebar from './team_detail_sidebar'

class TeamSideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.props.fetchTeams();
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
        let icon = document.getElementById('team-collapse');
        icon.classList.toggle('sidebar-accord-rotate');
    };

    render() {
        const teams = this.props.teams.map(team => {
            return <TeamDetailSidebar key={team.id} team={team}/>
        });

        return <div className="side-teams">
            <div className="side-team-toggle" onClick={this.toggle}>
                <h3>Teams</h3>
                <svg
                    className="team-icon-expand sidebar-accord-icon"
                    id="team-collapse"
                    viewBox="0 0 24 24">
                    <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1
                    C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2
                    C18.5,7.3,19.5,7.3,20,8
                    c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1
                    c-0.6,0.5-1.4,0.5-2,0
                    L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z">
                    </path>
                </svg>
                
            </div>

            {this.state.open && (
            <div>
                { teams }
                <div className="side-add-team">
                    <svg 
                        className="team-icon-plus-gray" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6
                            c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6
                            c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4
                            c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z">
                        </path>
                    </svg>
                    <p>Add Team</p>
                </div>
            </div>
            )}
        </div>
    }
}

export default TeamSideBar;