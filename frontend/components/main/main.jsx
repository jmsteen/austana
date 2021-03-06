import React from 'react'
import HomeContainer from '../home/home_container';
import TeamOverviewContainer from '../../components/teams/team_overview_container';
import TasksContainer from '../../components/tasks/tasks_container';
import ProjectOverviewContainer from '../../components/projects/project_overview_container';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util'; 

class Main extends React.Component {

    render () {
        return <main className="item austana-main">
            <Switch>
                <ProtectedRoute exact path='/home' component={HomeContainer} />
                <ProtectedRoute 
                    exact path='/teams/:teamId' 
                    component={TeamOverviewContainer} 
                />
                <ProtectedRoute 
                    exact path='/projects/:projectId' 
                    component={ProjectOverviewContainer} 
                />
                <ProtectedRoute 
                    exact path='/tasks'
                    component={TasksContainer} 
                />
                <ProtectedRoute component={HomeContainer} />
            </Switch>
        </main>
        
    }
}

export default Main;