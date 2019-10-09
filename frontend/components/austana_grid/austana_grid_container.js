import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import AustanaGrid from './austana_grid';

const mapStateToProps = ({ entities: { users }, session }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(AustanaGrid);