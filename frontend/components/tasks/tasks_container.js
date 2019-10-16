import { connect } from 'react-redux';
import Tasks from './tasks';
import { fetchTasks } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';
import { recentlyAssignedSelector, todaySelector, laterSelector, upcomingSelector } from '../../reducers/selectors';

const mapStateToProps = ({entities: { tasks }}, ownProps) => {
    
    return {
        tasks: Object.values(tasks),
        recentlyAssignedTasks: recentlyAssignedSelector(tasks),
        upcomingTasks: upcomingSelector(tasks),
        todayTasks: todaySelector(tasks),
        laterTasks: laterSelector(tasks)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(fetchTasks()),
        createTask: (modal) => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);