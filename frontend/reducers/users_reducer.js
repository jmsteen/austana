import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TEAM_MEMBERS } from '../actions/team_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
    
    switch(action.type) {
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