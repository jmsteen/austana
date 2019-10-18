export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (formType, projectId, taskListId) => {
    return {
        type: OPEN_MODAL,
        modal: {
            formType,
            projectId,
            taskListId
        }
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};