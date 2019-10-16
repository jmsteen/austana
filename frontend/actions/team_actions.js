import * as TeamApiUtil from '../util/team_api_util';

export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

const receiveAllTeams = teams => {
    return {
        type: RECEIVE_ALL_TEAMS,
        teams
    };
};

const receiveTeam = team => {
    return {
        type: RECEIVE_TEAM,
        team
    };
};

export const fetchTeams = () => dispatch => {
    return TeamApiUtil.fetchTeams().then(teams => dispatch(receiveAllTeams(teams)))
};

export const fetchTeam = (id) => dispatch => {
    return TeamApiUtil.fetchTeam(id).then(team => dispatch(receiveTeam(team)))
};

export const createTeam = (team) => dispatch => {
    return TeamApiUtil.createTeam(team).then(team => dispatch(receiveTeam(team)))
};

export const updateTeam = (team) => dispatch => {
    return TeamApiUtil.updateTeam(team).then(team => dispatch(receiveTeam(team)))
};