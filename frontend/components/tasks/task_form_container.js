import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({entities: {users}, session }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (taskListId, task) => dispatch(createTask(taskListId, task)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);