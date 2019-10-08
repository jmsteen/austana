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
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            });
        };
    };

    handleSubmit(e) {
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return this.props.errors.map((error, i) => (
            <li key={i}>
                {error}
            </li>
        ));
    }

    render () {

        return (
            <div className="session">
                <header className="session-header">
                    <img className="logo" src={window.logo} alt="austana-logo"/> 
                </header>
                <section className="session-container">
                    <h1 className="session-form-title">{this.props.formType}</h1>
                    
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <label>Email Address
                            <br/>
                            <input type="text"
                                onChange={this.update('email')}
                                value={this.state.email}
                            />
                        </label>
                        <br/>
                        <label>Password
                            <br/>
                            <input type="password"
                                onChange={this.update('password')}
                                value={this.state.password}
                            />
                        </label>
                        <br/>
                        <div className="session-button">
                            <button>{this.props.formType}</button>
                        </div>
                    </form>
                </section>
                <footer className="session-footer">
                    <p>{this.props.message}</p>
                    <Link to={`/${this.props.button}`}>
                        <button>{this.props.altSession}</button>
                    </Link>
                </footer>
            </div>
        )
    }
};

export default SessionForm;