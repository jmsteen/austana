import SessionForm from './session_form';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ errors }, ownProps) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        message: 'Already have an account?',
        altSession: 'Log In',
        button: 'login'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        demoLogin: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);