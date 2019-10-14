import React from 'react';

class TeamOverview extends React.Component {


    render() {
        return <div className="team-overview">
            <div className="team-inner">
                <div className="team-left">
                    <div className="team-description">
                        <h3>Description</h3>
                    </div>

                    <div className="team-members">
                        <h3>Members</h3>
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