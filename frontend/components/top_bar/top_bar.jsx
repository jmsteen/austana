import React from 'react';
import NewDropDown from './new_dropdown';

class TopBar extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        let userNames = this.props.currentUser.name.split(' ')
        let initials = "";
        userNames.forEach(partOfName => initials += partOfName[0]);

        return <nav className="item top-bar">
           
                    <section className="top-bar-left">
                        <h2>Home</h2>
                    </section>
                    
                    <section className="top-bar-right">
                        <NewDropDown  />
                        <div className="dropdown">
                            <div className="user-logout">
                                <span>{initials || "G"}</span>
                            </div>
                            <div className="dropdown-content">
                                <button onClick={this.props.logout}>Logout</button>
                            </div>
                        </div>
                    </section>
        </nav>

    }
    
}

export default TopBar;