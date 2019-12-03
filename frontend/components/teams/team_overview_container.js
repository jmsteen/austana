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
    const teamId = ownProps.match.params.teamId;
    const filteredProjects = Object.values(projects).filter(project=>project.team_id.toString() === teamId)
    return {
        team,
        teamId,
        users,
        projects: filteredProjects
    }
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchTeam: (id) => dispatch(fetchTeam(id)),
        fetchTeams: () => dispatch(fetchTeams()),
        updateTeam: team => dispatch(updateTeam(team)),
        fetchProjects: ()=>dispatch(fetchProjects()),
        openPopup: type => dispatch(openPopup(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamOverview);