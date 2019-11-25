import { connect } from 'react-redux';
import Home from './home';

const msp = ({entities: { users }, session}, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mdp = dispatch => {
    return {}
};

export default connect(msp, mdp)(Home);