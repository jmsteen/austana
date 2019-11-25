import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { closePopup } from '../../actions/popup_actions';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = ({entities: { projects, users, teams}, session}) => {
    return {
        team: Object.values(teams)[0]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createProject: project => dispatch(createProject(project)),
        closePopup: () => dispatch(closePopup())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);