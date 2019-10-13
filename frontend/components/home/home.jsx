import React from 'react';
import UpcomingTasksContainer from '../tasks/upcoming_tasks_container';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <section className="home">
            <div className="home-inner">
                <header className="home-welcome">
                    <img src={window.welcome} alt="Welcome to Asana"/>
                    <div className="welcome-content">
                        <p>Hello, Guest!</p>
                        <p>Welcome to Austana. This is your home page, where you can
                            see upcoming tasks and recently touched projects. We've
                            filled in some examples in case it's helpful.
                        </p>
                    </div>
                </header>
                <UpcomingTasksContainer />
            </div>
        </section>
    }
}

export default Home;