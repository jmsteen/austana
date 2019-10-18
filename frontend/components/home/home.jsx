import React from 'react';
import UpcomingTasksContainer from '../tasks/upcoming_tasks_container';
import RecentProjectsContainer from '../projects/recent_projects_container';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        let initials = this.props.currentUser.name ? this.props.currentUser.name.split(" ")[0] : "";
        return <section className="home">
            <div className="home-inner">
                <header className="home-welcome">
                    <img src={window.welcome} alt="Welcome to Asana"/>
                    <div className="welcome-content">
                        <p>Hello, {initials}!</p>
                        <p>Welcome to Austana. This is your home page, where you can
                            see your upcoming tasks and projects.
                        </p>
                    </div>
                </header>
                <UpcomingTasksContainer />
                <RecentProjectsContainer />
            </div>
        </section>
    }
}

export default Home;