import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    };
};


class NewDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    componentDidMount() {
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] !== 'new-drop-btn') {
                this.setState({ open: false })
            };
        });
    }

    componentWillUnmount() {
        document.removeEventListener('click', (e) => {
            if (e.target.classList[0] !== 'new-drop-btn') {
                this.setState({ open: false })
            };
        });
    }

    toggleDropdown() {
        this.setState({open: !this.state.open})
    }
    
    render () {
        
        return <div className="new-dropdown"
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
                          
                            <button onClick={()=>this.props.openModal('taskForm')}>Task</button> 
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

export default connect(null, mapDispatchToProps)(NewDropDown);