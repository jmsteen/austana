import React from 'react';
import TaskFormContainer from '../tasks/task_form_container';

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
            {this.state.open && (<div className="root-positioner">
                <div className="positioner-outer">
                    <div className="positioner-inner">
                        <div 
                            id="dropdown-items" 
                            className="new-dropdown-items"
                        >   
                            <span>Task</span>
                            <span>Project</span> 
                        </div>
                        
                        <div className="arrow-anchor">
                            <div className="up-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
    }
}

export default NewDropDown;