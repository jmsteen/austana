import { connect } from 'react-redux';
import ProjectOverview from './project_overview';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchTaskLists, updateTaskList } from '../../actions/task_list_actions';
import { fetchTasks } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchCurrentTask, updateTask } from '../../actions/task_actions';
import { openPopup } from '../../actions/popup_actions';


const mapStateToProps = ({ entities: { projects, tasks, taskLists }}, ownProps ) => {
    const project = projects[ownProps.match.params.projectId];
    
    return {
        project,
        tasks: Object.values(tasks),
        taskLists: Object.values(taskLists)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProject: id => dispatch(fetchProject(id)),
        updateProject: project => dispatch(updateProject(project)),
        fetchTaskLists: projectId => dispatch(fetchTaskLists(projectId)),
        updateTaskList: taskList => dispatch(updateTaskList(taskList)),
        fetchTasks: () => dispatch(fetchTasks()),
        openModal: (type) => dispatch(openModal(type)),
        openPopup: () => dispatch(openPopup('taskDetail')),
        fetchCurrentTask: id => dispatch(fetchCurrentTask(id)),
        updateTask: task => dispatch(updateTask(task))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOverview);