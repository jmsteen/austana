import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_TEAM_MEMBER = 'RECEIVE_TEAM_MEMBER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    };
};

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

const receiveTeamMember = (teamMember, teamId) => {
    return {
        type: RECEIVE_TEAM_MEMBER,
        teamMember,
        teamId
    };
};

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)
        ), err => dispatch(receiveErrors(err.responseJSON)));
};

export const login = user => dispatch => {
    return SessionApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)
        ), err => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
};

export const updateUser = user => dispatch => {
    return SessionApiUtil.updateUser(user)
        .then(user => dispatch(receiveCurrentUser(user)))
};

export const createTeamMember = (user, teamId) => dispatch => {
    return SessionApiUtil.createTeamMember(user, teamId)
        .then(user => dispatch(receiveTeamMember(user, teamId)))
};