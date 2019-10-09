import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from './util/route_util';
import HomeContainer from './components/home/home_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import LoginFormContainer from './components/session_form/login_form_container';

const App = () => {
    return <div>
       
        <Switch>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <ProtectedRoute exact path='/home' component={HomeContainer}/>
            <AuthRoute component={LoginFormContainer}/>
        </Switch>
    </div>
};

export default App;