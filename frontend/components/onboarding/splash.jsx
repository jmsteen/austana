import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
      <div className="splash-container">
        <nav className="splash-nav">
          <img className="splash-logo" src={window.austanaBlackOrange} alt="" />
          <div className="splash-session-buttons">
            <Link to={`/login`}>
              <button>Login</button>
            </Link>
            <Link to={`/signup`}>
              <button>Sign Up</button>
            </Link>
          </div>
        </nav>
        <section className="splash-main">
          <div className="splash-intro">
            <h2>
              Free up the time spent managing your work so you can focus on the
              work itself.
            </h2>
            <h3>
              Create and manage tasks, projects, teams and task lists so you can
              stay organized and accomplish your business goals.
            </h3>
            <div>
                <Link to={`/login`}>
                    <button>Login as guest</button>
                </Link>
            </div>
          </div>
          <div className="splash-austana">
            <img src={window.welcomeSplash} alt="" />
          </div>
          <div className="splash-highlights">
            <div className="splash-highlight-panel">
              <img src={window.todoList} alt="" />
              <p>
                Create tasks and utilize the "My Tasks" feature to view and
                organize tasks by due date and completion status.
              </p>
            </div>
            <div className="splash-highlight-panel">
              <img src={window.team} alt="" />
              <p>
                Add teams and use the team overview to view and add members and
                projects.
              </p>
            </div>
            <div className="splash-highlight-panel">
              <img src={window.project} alt="" />
              <p>
                Keep track of existing tasks and task lists on your project
                overview so you can manage each project in one place.
              </p>
            </div>
          </div>
        <div className="splash-button-container">
            <Link to={`/login`}>
                <button className="splash-button">Try it out</button>
            </Link>
        </div>
        </section>
      </div>
    );
}