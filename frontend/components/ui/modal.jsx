import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import TaskFormContainer from '../tasks/task_form_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.formType) {
        case 'taskForm':
            component = <TaskFormContainer projectId={modal.projectId} taskListId={modal.taskListId}/>
            break;
        default:
            return null;
    }

    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal-child" onClick={e=>e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);