import * as ProjectApiUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_CURRENT_PROJECT = 'RECEIVE_CURRENT_PROJECT'
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveAllProjects = projects => {
    return {
        type: RECEIVE_ALL_PROJECTS,
        projects
    };
};

const receiveProject = project => {
    return {
        type: RECEIVE_PROJECT,
        project
    };
};

const receiveCurrentProject = projectId => {
    return {
        type: RECEIVE_CURRENT_PROJECT,
        projectId
    };
};

const removeProject = project => {
    return {
        type: REMOVE_PROJECT,
        projectId: project.id
    };
};

export const fetchProjects = () => dispatch => {
    return ProjectApiUtil.fetchProjects()
        .then(projects => dispatch(receiveAllProjects(projects)));
};

export const fetchProject = (id) => dispatch => {
    return ProjectApiUtil.fetchProject(id)
        .then(project => dispatch(receiveProject(project)));
};

export const fetchCurrentProject = projectId => dispatch => {
    return dispatch(receiveCurrentProject(projectId));
};

export const createProject = (projectListId, project) => dispatch => {
    return ProjectApiUtil.createProject(projectListId, project)
        .then(project => dispatch(receiveProject(project)));
};

export const updateProject = (project) => dispatch => {
    return ProjectApiUtil.updateProject(project)
        .then(project => dispatch(receiveProject(project)));
};

export const deleteProject = (id) => dispatch => {
    return ProjectApiUtil.fetchProject(id)
        .then(project => dispatch(removeProject(project)));
};