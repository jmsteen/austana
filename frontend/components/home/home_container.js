import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({entities: { users }, session}, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);