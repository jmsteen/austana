import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ entities: { projects } }, ownProps) => {
    const project = projects[ownProps.match.params.projectId] || "";

    return {
        project
    };
};

const ProjectsNav = (props) => {
    return (
        <div>
            <h2>{props.project.name}</h2>
        </div>
    )
}

export default connect(mapStateToProps, null)(ProjectsNav);