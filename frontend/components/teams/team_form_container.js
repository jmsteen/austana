import { connect } from 'react-redux';
import TeamForm from './team_form';

const mapStateToProps = ({entities: { teams }}, ownProps) => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);