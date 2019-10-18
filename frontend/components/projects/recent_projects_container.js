import RecentProjects from './recent_projects';
import { fetchProjects } from '../../actions/project_actions';
import { connect } from 'react-redux';
import { openPopup } from '../../actions/popup_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities: { projects } }, ownProps) => {
   
    return {
        projects: Object.values(projects),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        openPopup: (type) => dispatch(openPopup(type))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecentProjects));