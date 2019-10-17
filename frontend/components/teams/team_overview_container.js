import { connect } from 'react-redux';
import TeamOverview from './team_overview';
import { 
    fetchTeams, 
    updateTeam,
    fetchTeamMembers,
    fetchTeamMemberIds 
} from '../../actions/team_actions';


const mapStateToProps = ({entities: { teams, users }}, ownProps) => {
    const team = teams[ownProps.match.params.teamId];
    const memberIds = team ? team.memberIds : null;

    return {
        team,
        users,
        memberIds
    }
};

const mapDispatchToProps = dispatch => {
    
    return {
        fetchTeams: () => dispatch(fetchTeams()),
        updateTeam: team => dispatch(updateTeam(team)),
        fetchTeamMemberIds: id => dispatch(fetchTeamMemberIds(id)),
        fetchTeamMembers: id => dispatch(fetchTeamMembers(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamOverview);