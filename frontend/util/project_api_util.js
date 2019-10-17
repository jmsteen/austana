export const fetchProjects = () => {
    return $.ajax({
        method: 'GET',
        url: `api/projects`,
        error: err => console.log(err)
    });
};

export const fetchProject = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/projects/${id}`,
        error: err => console.log(err)
    });
}

export const createProject = (project) => {
    return $.ajax({
        method: 'POST',
        url: `api/projects`,
        data: { project },
        error: err => console.log(err)
    });
}

export const updateProject = (project) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/projects/${project.id}`,
        data: { project },
        error: err => console.log(err)
    });
}

export const deleteProject = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/projects/${id}`,
        error: err => console.log(err)
    });
}