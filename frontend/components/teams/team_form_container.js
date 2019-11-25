import { connect } from 'react-redux';
import { closePopup } from '../../actions/popup_actions';
import { createTeam } from '../../actions/team_actions';
import TeamForm from './team_form';

const mapStateToProps = ({ entities: { users }, ui, session }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closePopup: () => dispatch(closePopup()),
        createTeam: team => dispatch(createTeam(team))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);