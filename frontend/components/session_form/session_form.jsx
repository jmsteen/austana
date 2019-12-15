import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(()=>{
            if (this.props.formType === 'Sign Up') {
                return this.props.history.push('/welcome')
            } else {
                return this.props.history.push('/')
            }
        });
    }

    componentDidMount() {
        this.props.clearErrors();
    }


    renderErrors() {
        const errors =  this.props.errors.map((error, i) => (
            <p key={i}>
                {error}
            </p>
        ));
        return errors;
    }


    demoLogin(e) {
        e.preventDefault();
        const demoUser = { email: 'demo@demo.com' , password: 'demopassword' };
        this.props.demoLogin(demoUser).then(() => (
            this.props.history.push('/home')
        ));
    }

    render () {

        return (
          <div className="session">
            <header className="session-header">
              <img className="logo" src={window.logo} alt="austana-logo" />
            </header>
            <section className="session-container">
              <h1 className="session-form-title">{this.props.formType}</h1>

              <form className="session-form" onSubmit={this.handleSubmit}>
                <div className="session-errors">{this.renderErrors()}</div>
                <label>
                  Email Address
                  <br />
                  <input
                    type="text"
                    onChange={this.update("email")}
                    value={this.state.email}
                  />
                </label>
                <br />
                <label>
                  Password
                  <br />
                  <input
                    type="password"
                    onChange={this.update("password")}
                    value={this.state.password}
                  />
                </label>
                <br />
                <div className="session-form-buttons">
                  <div className="session-button">
                    <button id="guest-button">{this.props.formType}</button>
                  </div>
                  <div className="session-button">
                    <button onClick={this.demoLogin.bind(this)}>
                      Guest Login
                    </button>
                  </div>
                </div>
              </form>
            </section>
            <footer className="session-footer">
              <p>{this.props.message}</p>
              <Link to={`/${this.props.button}`}>
                <button>{this.props.altSession}</button>
              </Link>
              {/* <button onClick={this.demoLogin.bind(this)} className="demo">
                Demo Login
              </button> */}
            </footer>
          </div>
        );
    }
};

export default SessionForm;