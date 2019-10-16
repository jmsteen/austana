import { connect } from 'react-redux';
import Tasks from './tasks';
import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = ({entities: { tasks }}, ownProps) => {
    return {
        tasks: Object.values(tasks)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTasks: () => dispatch(fetchTasks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);