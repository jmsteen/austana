import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = ({ errors }, ownProps) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        message: 'Already have an account?',
        altSession: 'Sign In',
        button: 'login'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);