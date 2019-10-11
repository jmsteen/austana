import { connect } from 'react-redux';
import TaskForm from './task_form';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = ({entities: {users}, session }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (taskListId, task) => dispatch(createTask(taskListId, task))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);