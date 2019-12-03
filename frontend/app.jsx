import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from './util/route_util';
import Modal from './components/ui/modal'
import Popup from './components/ui/popup'
import AustanaGridContainer from './components/austana_grid/austana_grid_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import LoginFormContainer from './components/session_form/login_form_container';
import Welcome from './components/onboarding/welcome';
import Setup from './components/onboarding/setup';


const App = () => {
    return <div>
        <Modal />
        <Popup />
        <Switch>
            <ProtectedRoute exact path='/welcome' component={Welcome} />
            <ProtectedRoute exact path='/setup' component={Setup} />
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <ProtectedRoute path='/' component={AustanaGridContainer} />
            <AuthRoute component={LoginFormContainer}/>
        </Switch>
    </div>
};

export default App;