import UpcomingTasks from './upcoming_tasks';
import upcomingTasksSelector from '../../reducers/selectors';
import { fetchTasks } from '../../actions/task_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({entities: {tasks}}, ownProps) => {
    const upcomingTasks = upcomingTasksSelector(tasks).slice(0, 2);

    return {
        upcomingTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: (taskListId) => dispatch(fetchTasks(taskListId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingTasks);