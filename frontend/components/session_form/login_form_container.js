import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

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
        processForm: user => dispatch(login(user)),
        demoLogin: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);