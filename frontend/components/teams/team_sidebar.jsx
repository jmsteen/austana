import React from 'react';
import TeamDetailSidebar from './team_detail_sidebar'

class TeamSideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: true }
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
                <div onClick={() => this.props.openPopup('teamForm')} className="create-team">+ Add Team</div>
            </div>
            )}
        </div>
    }
}

export default TeamSideBar;