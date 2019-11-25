import React from 'react';
import { connect } from 'react-redux';
import { createTeam } from '../../actions/team_actions';
import { updateUser } from '../../actions/session_actions';

const mapStateToProps = ({entities: { users }, session}) => {
    return {
        email: users[session.id].email
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createTeam: team => dispatch(createTeam(team)),
        updateUser: user => dispatch(updateUser(user))
    };
};

class Setup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: ""
            },
            team: {
                name: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    update(type) {
        return (e) => {
            let name = { name: e.target.value}
            this.setState ({
                [type]: name
            });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTeam(this.state.team)
            .then(()=>this.props.updateUser(this.state.user))
            .then(()=>this.props.history.push('/home'))
    }

    render() {
        return <div className="setup-form-container">
            <div>
                <h2>Let's get you setup</h2>
                <p>Your signup email is {this.props.email}</p>
                <form className="setup-form" onSubmit={this.handleSubmit}>
                    <label>Your full name
                        <br/>
                        <input 
                            required 
                            type="text"
                            placeholder="First & last name"
                            value={this.state.user.name}
                            onChange={this.update('user')}
                        />
                    </label>
                    <label>Which team will you be working on?
                        <br/>
                        <input 
                            required
                            type="text"
                            placeholder="Engineering"
                            onChange={this.update('team')}
                        />
                    </label>
                    
                    <button>Continue</button>
                </form>
            </div>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setup);