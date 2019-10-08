import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ({ errors }, ownProps) => {
    return {
        errors: errors.session,
        formType: 'Log In',
        message: 'Don\'t have an account?',
        altSession: 'Sign Up',
        button: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);