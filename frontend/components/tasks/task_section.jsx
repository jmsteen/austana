import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './task_item';

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {}
};



class TaskSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: true }
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({ open: !this.state.open });
        let icon = document.getElementById(`task-collapse-${this.props.type}`);
        icon.classList.toggle('task-collapse-rotate')
    }

    render() {
        
        const sectionTitle = () => {
            switch (this.props.type) {
                case "recently-assigned":
                    return 'Recently assigned';
                case "today":
                    return "Today";
                case "upcoming":
                    return "Upcoming";
                case "later":
                    return 'Later';
                default:
                    return "Recently assigned"
            }
        };

        
        
        let taskLis = false;

        if (this.props.tasks) {
            taskLis = this.props.tasks.map((task, i) => {
                return <TaskItem task={task} key={i}/>
            });
        };

        return <div>
            <div className="task-section" onClick={this.toggle}>
                <svg 
                    className="team-icon-arrow task-collapse-rotate" 
                    viewBox="0 0 24 24" 
                    id={`task-collapse-${this.props.type}`}
            >
                    <path d="M17.5,10.7l-7.1-7.1
                    C10,3.2,9.4,3,8.8,3.3
                    c-0.6,0.2-1,0.8-1,1.4v14.9
                    c0,0.6,0.4,1.2,1,1.4c0.2,0.1,0.4,0.1,0.6,0.1
                    c0.4,0,0.8-0.2,1.1-0.5l7.1-7.1
                    c0.4-0.4,0.6-0.9,0.6-1.5
                    S17.9,11.1,17.5,10.7z"></path>
                </svg>
                <h3>{sectionTitle()}</h3>
            </div>
                {this.state.open && (<ul className="index-task-list"> {taskLis} </ul>)}
        </div>
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSection);