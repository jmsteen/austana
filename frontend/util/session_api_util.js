export const signup = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    });
};

export const createTeamMember = (teamMember, teamId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/teams/${teamId}/users`,
        data: { teamMember }
    })
}

export const login = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    });
};

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    });
};

export const updateUser = user => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: { user }
    });
};
