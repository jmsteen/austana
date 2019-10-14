import React from 'react';
import NewDropDown from './new_dropdown';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import HomeNav from '../../components/navbars/home-nav';
import TasksNav from '../../components/navbars/tasks-nav';
import TeamNav from '../../components/navbars/team-nav';
 
class TopBar extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        let userNames = this.props.currentUser.name.split(' ')
        let initials = "";
        userNames.forEach(partOfName => initials += partOfName[0]);

        return <nav className="item top-bar">
           
                    <section className="top-bar-left">
                        <Switch>
                            <ProtectedRoute path='/tasks' component={TasksNav} />
                            <ProtectedRoute path='/teams' component={TeamNav} />
                            <ProtectedRoute exact path='/home' component={HomeNav} />
                        </Switch>
                    </section>
                    
                    <section className="top-bar-right">
                        <NewDropDown  />
                        <div className="dropdown">
                            <div className="user-logout">
                                <span>{initials || "G"}</span>
                            </div>
                            <div className="dropdown-content">
                                <button onClick={this.props.logout}>Logout</button>
                            </div>
                        </div>
                    </section>
        </nav>

    }
    
}

export default TopBar;