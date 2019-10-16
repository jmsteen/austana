import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({entities: { users }, session}) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {

}


const TasksNav = ({currentUser}) => {
    return (<div className="tasks-nav">
        <div className="task-initials-large task-initials-header">
            {currentUser.name
                .split(" ").map(name => (
                    name[0]
                )).join("")}
        </div>
        <h2>{currentUser.name.split(" ")[0]}'s Tasks</h2>
    </div>
    )
}

export default connect(mapStateToProps, null)(TasksNav);