import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ entities: { users }, session }, ownProps) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

class LogoutDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    toggleDropdown() {
        this.setState({open: !this.state.open})
    }
    
    render () {
        const initials = () => {
            if (this.props.currentUser.name) {
                let userNames = this.props.currentUser.name.split(' ')
                return userNames.map(partOfName => partOfName[0])
            };
        }
        return <div className="logout-dropdown disable-text"
        >
            <div className="dropdown" onClick={this.toggleDropdown.bind(this)}>
                <div className="user-logout">
                    <span>{this.props.currentUser && initials()}</span>
                </div>
            </div>
            {this.state.open && (<div className="logout-positioner">
                <div className="logout-positioner-outer">
                    <div className="logout-positioner-inner">
                        <div 
                            id="logout-dropdown-items" 
                            className="logout-dropdown-items"
                        >   
                            <button onClick={this.props.logout}>Logout</button>
                        </div>
                        
                        <div className="arrow-anchor">
                            <div className="logout-up-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutDropdown);