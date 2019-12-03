import { connect } from 'react-redux';
import TopBar from './top_bar';
import { logout } from '../../actions/session_actions';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = ({entities: {users, projects}, session}, ownProps) => {
    return {
        currentUser: users[session.id],
        projects: projects
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchProjects: () => dispatch(fetchProjects())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);