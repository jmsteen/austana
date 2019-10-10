import React from 'react';

class NewDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    closeDropdown() {
        this.setState({open: false})
    }

    toggleDropdown() {
        this.setState({open: !this.state.open})
    }
    
    render () {
        
        return <div className="new-dropdown"
            onBlur={this.closeDropdown}
        >
            <button className="new-drop-btn" 
            onClick={this.toggleDropdown.bind(this)}
            >
                + New
                        </button>
            {this.state.open && (<div 
                id="dropdown-items" 
                className="new-dropdown-items"
                
            >
                <a href="">Task</a>
                <a href="">Project</a>
            </div>)
            }
        </div>
    }
}

export default NewDropDown;