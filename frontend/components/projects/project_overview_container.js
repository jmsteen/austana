import { connect } from 'react-redux';
import ProjectOverview from './project_overview';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchTaskLists, updateTaskList } from '../../actions/task_list_actions';


const mapStateToProps = ({ entities: { projects }}, ownProps ) => {
    const project = projects[ownProps.match.params.projectId];
    
    return {
        project
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProject: id => dispatch(fetchProject(id)),
        updateProject: project => dispatch(updateProject(project)),
        fetchTaskLists: projectId => dispatch(fetchTaskLists(projectId)),
        updateTaskList: taskList => dispatch(updateTaskList(taskList))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverview);