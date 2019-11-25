import { RECEIVE_ALL_TEAMS, RECEIVE_TEAM, RECEIVE_TEAM_MEMBER_IDS } from '../actions/team_actions';
import merge from 'lodash/merge';


const teamsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_TEAMS:
            return action.teams;
        case RECEIVE_TEAM:
            return merge({}, state, { [action.team.id]: action.team });
        case RECEIVE_TEAM_MEMBER_IDS:
            return merge({}, state, { [action.teamId]: merge(
                {}, state[action.teamId], {memberIds: action.memberIds} )}
            );
        default:
            return state;
    };
};

export default teamsReducer;