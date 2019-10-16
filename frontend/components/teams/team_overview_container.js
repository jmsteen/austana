import { connect } from 'react-redux';
import TeamOverview from './team_overview';

const mapStateToProps = (state, ownProps) => {
    const team = ownProps.match.params.teamId;
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamOverview);