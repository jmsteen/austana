import React from 'react';
import NewDropDown from './new_dropdown';
import LogoutDropdown from './logout_dropdown';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import HomeNav from '../../components/navbars/home-nav';
import TasksNav from '../../components/navbars/tasks-nav';
import TeamNav from '../../components/navbars/team-nav';
import ProjectsNav from '../../components/navbars/projects-nav';
 
class TopBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            currentUser: ""
        };
    }

    componentDidMount() {
        if (!this.props.projects) {
            this.props.fetchProjects()
                .then(this.props.fetchTaskLists(Object.keys(this.props.projects)[0]))
        }
    }

    render () {
        const initials = () => {if (this.props.currentUser.name) {
            let userNames = this.props.currentUser.name.split(' ')
            return userNames.map(partOfName => partOfName[0])
            };
        }
        return <nav className="item top-bar">
                    <section className="top-bar-left">
                        <Switch>
                            <ProtectedRoute path='/tasks' component={TasksNav} />
                            <ProtectedRoute exact path='/teams/:teamId' component={TeamNav} />
                            <ProtectedRoute exact path='/projects/:projectId' component={ProjectsNav} />
                            <ProtectedRoute exact path='/home' component={HomeNav} />
                        </Switch>
                    </section>
                    
                    <section className="top-bar-right">
                        <NewDropDown  />
                        <LogoutDropdown />
                    </section>
        </nav>

    }
    
}

export default TopBar;