import {
    RECEIVE_ALL_PROJECTS,
    RECEIVE_PROJECT,
    REMOVE_PROJECT
} from '../actions/project_actions';
import merge from 'lodash/merge'

const projectsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            return merge({}, state, { [action.project.id]: action.project });
        case REMOVE_PROJECT:
            let newState = merge({}, oldState);
            delete newState[action.projectId];
            return newState;
        default:
            return state;
    };
};

export default projectsReducer;