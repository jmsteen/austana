import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from './util/route_util';
import Modal from './components/ui/modal'
import AustanaGridContainer from './components/austana_grid/austana_grid_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import LoginFormContainer from './components/session_form/login_form_container';

// const App = () => {
//     return <div>
//         <Modal />
//         <Switch>
//             <AuthRoute exact path='/signup' component={SignupFormContainer}/>
//             <AuthRoute exact path='/login' component={LoginFormContainer}/>
//             <ProtectedRoute exact path='/home' component={AustanaGridContainer}/>
//             <ProtectedRoute exact path='/teams/:teamId' component={TeamOverviewContainer}/>
//             <AuthRoute component={LoginFormContainer}/>
//         </Switch>
//     </div>
// };

const App = () => {
    return <div>
        <Modal />
        <Switch>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/>
            <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <ProtectedRoute path='/' component={AustanaGridContainer}/>
            <AuthRoute component={LoginFormContainer}/>
        </Switch>
    </div>
};

export default App;