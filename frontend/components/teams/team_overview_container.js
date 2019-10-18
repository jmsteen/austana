import { connect } from 'react-redux';
import TeamOverview from './team_overview';
import { 
    fetchTeams, 
    updateTeam,
    fetchTeamMembers,
    fetchTeamMemberIds 
} from '../../actions/team_actions';
import { fetchProjects } from '../../actions/project_actions'
import { openPopup } from '../../actions/popup_actions';


const mapStateToProps = ({entities: { teams, users, projects }}, ownProps) => {
    const team = teams[ownProps.match.params.teamId];
    const memberIds = team ? team.memberIds : null;

    return {
        team,
        users,
        memberIds,
        projects: Object.values(projects)
    }
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchTeams: () => dispatch(fetchTeams()),
        updateTeam: team => dispatch(updateTeam(team)),
        fetchTeamMemberIds: id => dispatch(fetchTeamMemberIds(id)),
        fetchTeamMembers: id => dispatch(fetchTeamMembers(id)),
        fetchProjects: ()=>dispatch(fetchProjects()),
        openPopup: type => dispatch(openPopup(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamOverview);