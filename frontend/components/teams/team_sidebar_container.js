import { connect } from 'react-redux';
import TeamSideBar from './team_sidebar';
import { fetchTeams } from '../../actions/team_actions'
import {openPopup } from '../../actions/popup_actions';

const mapStateToProps = ({entities: { teams }}) => {
    const teamArr = Object.values(teams);
    return {
        teams: teamArr
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeams: () => dispatch(fetchTeams()),
        openPopup: type => dispatch(openPopup(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSideBar);