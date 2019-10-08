import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthRoute } from './util/route_util';
import GreetingContainer from './components/greeting/greeting_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import LoginFormContainer from './components/session_form/login_form_container';

const App = () => {
    return <div>
        <header>
            {/* <GreetingContainer /> */}
        </header>
        <Switch>
            <Redirect exact from="/" to="/signup" />
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
        </Switch>
    </div>
};

export default App;