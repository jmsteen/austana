import UpcomingTasks from './upcoming_tasks';
import upcomingTasksSelector from '../../reducers/selectors';
import { fetchTasks, fetchCurrentTask } from '../../actions/task_actions';
import { openPopup } from '../../actions/popup_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({entities: {tasks}}, ownProps) => {
    const upcomingTasks = upcomingTasksSelector(tasks).slice(0, 3);

    return {
        upcomingTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(fetchTasks()),
        openTask: () => dispatch(openPopup('taskDetail')),
        fetchCurrentTask: id => dispatch(fetchCurrentTask(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingTasks);