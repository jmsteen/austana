export const fetchTeams = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/teams'
    });
};

export const fetchTeam = id => {
    return $.ajax({
        method: 'GET',
        url: `api/teams/${id}`
    });
};

export const fetchTeamMembers = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/teams/${id}/users`
    })
}

export const createTeam = team => {
    return $.ajax({
        method: 'POST',
        url: 'api/teams',
        data: { team }
    });
};

export const updateTeam = team => {
    return $.ajax({
        method: 'PATCH',
        url: `api/teams/${team.id}`,
        data: {
            team
        }
    });
};