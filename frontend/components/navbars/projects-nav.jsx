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
            {/* <div className={`project-icon-small`}>
                <svg className="project-icon" viewBox="0 0 32 32">
                    <path d="M25.5,26.5H6.5A4.51,4.51,0,0,1,2,22V10A4.51,4.51,0,0,1,6.5,5.5h19A4.51,4.51,0,0,1,30,10V22A4.51,4.51,0,0,1,25.5,26.5Zm-19-18A1.5,1.5,0,0,0,5,10V22a1.5,1.5,0,0,0,1.5,1.5h19A1.5,1.5,0,0,0,27,22V10a1.5,1.5,0,0,0-1.5-1.5Z" /><rect x="21" y="11.5" width="1" height="1" /><rect x="7.5" y="11" width="2" height="2" /><path d="M10,13.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="11" width="12" height="2" /><path d="M25,13.5H12v-3H25Zm-12-1H24v-1H13Z" /><rect x="7.5" y="15" width="2" height="2" /><path d="M10,17.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="15" width="7" height="2" /><path d="M20,17.5H12v-3h8Zm-7-1h6v-1H13Z" /><rect x="7.5" y="19" width="2" height="2" /><path d="M10,21.5H7v-3h3Zm-2-1H9v-1H8Z" /><rect x="12.5" y="19" width="10" height="2" /><path d="M23,21.5H12v-3H23Zm-10-1h9v-1H13Z" />
                </svg>
            </div> */}
            <h2>{props.project.name}</h2>
        </div>
    )
}

export default connect(mapStateToProps, null)(ProjectsNav);