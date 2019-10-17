import RecentProjects from './upcoming_tasks';
import { fetchProjects } from '../../actions/project_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities: { tasks } }, ownProps) => {
    const upcomingTasks = sortedTasksSelector(tasks).slice(0, 3);

    return {
        upcomingTasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(fetchProjects())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingTasks);