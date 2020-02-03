import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({entities: { users }, session}, ownProps) => ({
    currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);