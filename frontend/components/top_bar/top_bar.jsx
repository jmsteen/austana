import React from 'react';

class TopBar extends React.Component {
    constructor(props) {
        super(props)

    }

    showDropdown () {
        document.getElementById("dropdown-items").classList.toggle('show');
    }

    render () {
        let userNames = this.props.currentUser.name.split(' ')
        let initials = "" || 'G';
        userNames.forEach(partOfName => initials += partOfName[0]);

        return <nav className="item top-bar">
            <section className="top-bar-left">
                <h2>Home</h2>
            </section>
            
            <section className="top-bar-right">
                <div className="new-dropdown">
                    <button className="new-drop-btn" onClick={this.showDropdown}>
                        + New
                    </button>
                    <div id="dropdown-items" className="new-dropdown-items">
                        <a href="">Task</a>
                        <a href="">Project</a>
                    </div>
                </div>
                <div className="dropdown">
                    <span>{initials}</span>
                    <div className="dropdown-content">
                        <button onClick={this.props.logout}>Logout</button>
                    </div>
                </div>
            </section>
        </nav>

    }
    
}

export default TopBar;