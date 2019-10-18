import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchTaskList } from '../../actions/task_list_actions';

const mapStateToProps = ({entities: {users, taskLists}, ui: {modal}, session }, projectId, taskListId) => {
    
    return {
        currentUser: users[session.id],
        taskList: taskLists[modal.taskListId]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        fetchTaskList: (id) => dispatch(fetchTaskList(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);