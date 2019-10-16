import { connect } from 'react-redux';
import TeamSideBar from './team_sidebar';
import { fetchTeams } from '../../actions/team_actions'

const mapStateToProps = ({entities: { teams }}) => {
    const teamArr = Object.values(teams);
    return {
        teams: teamArr
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeams: () => dispatch(fetchTeams())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSideBar);