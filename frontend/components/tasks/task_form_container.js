import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchTaskList, fetchTaskLists } from '../../actions/task_list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({entities: {users, taskLists, projects}, ui: {modal}, session }, modalIds) => {
    let taskListId = modalIds.taskListId || Object.keys(taskLists)[0];
    let projectId = !modalIds.projectId ? Object.keys(projects)[0] : modalIds.projectId;
    let taskList = taskLists[taskListId];
    taskLists = Object.values(taskLists);

    return {
        currentUser: users[session.id],
        taskListId: taskListId,
        taskList: taskList,
        taskLists: taskLists,
        projectId: projectId
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        fetchTaskList: (id) => dispatch(fetchTaskList(id)),
        fetchTaskLists: (projectId) => dispatch(fetchTaskLists(projectId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm));