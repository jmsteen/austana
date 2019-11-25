import { RECEIVE_CURRENT_USER, RECEIVE_TEAM_MEMBER } from '../actions/session_actions';
import { RECEIVE_TEAM_MEMBERS } from '../actions/team_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    
    switch(action.type) {
        case RECEIVE_TEAM_MEMBER:
            return merge({}, state, { [action.teamMember.id]: action.teamMember });
        case RECEIVE_TEAM_MEMBERS:
            return merge({}, state, action.members);
        case RECEIVE_CURRENT_USER:
            return Object.assign(
                {}, 
                state, 
                {[action.currentUser.id]: action.currentUser}
            )
        default:
            return state;
    };
    
};

export default usersReducer;