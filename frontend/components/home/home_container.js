import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Home from './home';

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
    mapDispatchToProps)(Home);