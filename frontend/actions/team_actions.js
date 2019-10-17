import * as TeamApiUtil from '../util/team_api_util';

export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const RECEIVE_TEAM_MEMBERS = 'RECEIVE_TEAM_MEMBERS';
export const RECEIVE_TEAM_MEMBER_IDS = 'RECEIVE_TEAM_MEMBER_IDS';

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

const receiveTeamMembers = (members) => {
    return {
        type: RECEIVE_TEAM_MEMBERS,
        members
    };
};

const receiveTeamMemberIds = (id, members) => {
    return {
        type: RECEIVE_TEAM_MEMBER_IDS,
        teamId: id,
        memberIds: Object.keys(members)
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

export const fetchTeamMemberIds = (id) => dispatch => {
    return TeamApiUtil.fetchTeamMembers(id)
        .then(members => dispatch(receiveTeamMemberIds(id, members)));
};

export const fetchTeamMembers = (id) => dispatch => {
    return TeamApiUtil.fetchTeamMembers(id)
        .then(members => dispatch(receiveTeamMembers(members)));
};