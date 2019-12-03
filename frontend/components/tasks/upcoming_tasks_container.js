import UpcomingTasks from './upcoming_tasks';
import {sortedTasksSelector} from '../../reducers/selectors';
import { fetchTasks, fetchCurrentTask } from '../../actions/task_actions';
import { openPopup } from '../../actions/popup_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({entities: {tasks}}, ownProps) => {
    
    let sortedTasks = Object.values(sortedTasksSelector(tasks)).filter(task => !task.completed);
    const upcomingTasks = sortedTasks
        .slice(sortedTasks.length - 2)
        .reverse();

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