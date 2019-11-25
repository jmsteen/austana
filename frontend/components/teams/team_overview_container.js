import { connect } from 'react-redux';
import TeamOverview from './team_overview';
import { 
    fetchTeam, 
    fetchTeams,
    updateTeam,
    fetchTeamMembers,
    fetchTeamMemberIds 
} from '../../actions/team_actions';
import { createTeamMember } from '../../actions/session_actions';
import { fetchProjects } from '../../actions/project_actions'
import { openPopup } from '../../actions/popup_actions';


const mapStateToProps = ({entities: { teams, users, projects }}, ownProps) => {
    const team = teams[ownProps.match.params.teamId];
    // const memberIds = team ? team.memberIds : null;
    const teamId = ownProps.match.params.teamId;
    return {
        team,
        teamId,
        users,
        // memberIds,
        projects: Object.values(projects)
    }
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchTeam: (id) => dispatch(fetchTeam(id)),
        fetchTeams: () => dispatch(fetchTeams()),
        // addMember: (member, teamId) => dispatch(createTeamMember(member, teamId)),
        updateTeam: team => dispatch(updateTeam(team)),
        // fetchTeamMemberIds: id => dispatch(fetchTeamMemberIds(id)),
        // fetchTeamMembers: id => dispatch(fetchTeamMembers(id)),
        fetchProjects: ()=>dispatch(fetchProjects()),
        openPopup: type => dispatch(openPopup(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamOverview);