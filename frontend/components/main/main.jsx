import React from 'react'
import HomeContainer from '../home/home_container';
import TeamOverviewContainer from '../../components/teams/team_overview_container';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util'; 

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <main className="item austana-main">
            <Switch>
                <ProtectedRoute exact path='/home' component={HomeContainer} />
                <ProtectedRoute 
                    exact path='/teams/:teamId' 
                    component={TeamOverviewContainer} 
                />
                <ProtectedRoute component={HomeContainer} />
            </Switch>
        </main>
        
    }
}

export default Main;