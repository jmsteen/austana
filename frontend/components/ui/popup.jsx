import React from 'react';
import { closePopup } from '../../actions/popup_actions';
import { connect } from 'react-redux';
import TeamFormContainer from '../teams/team_form_container';
import ProjectFormContainer from '../projects/project_form_container';
import TaskDetail from '../tasks/task_detail';

class Popup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.popup) {
            return null;
        }
        let component;
        
        switch (this.props.popup) {
            case 'teamForm':
                component = <TeamFormContainer />
                break;
            case 'taskDetail':
                component = <TaskDetail />
                break;
            case 'projectForm':
                component = <ProjectFormContainer />
                break;
            default:
                return null;
        }
    
        return (
            <div className="popup-background" onClick={this.props.closePopup}>
                <div className="popup-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        popup: state.ui.popup
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closePopup: () => dispatch(closePopup())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);