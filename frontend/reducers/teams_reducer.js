import { RECEIVE_ALL_TEAMS, RECEIVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';


const teamsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_TEAMS:
            return action.teams;
        case RECEIVE_TEAM:
            return merge({}, state, { [action.team.id]: action.team });
        default:
            return state;
    };
};

export default teamsReducer;