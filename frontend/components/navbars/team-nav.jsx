import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({entities: { teams }}, ownProps) => {
    const team = teams[ownProps.match.params.teamId];
    
    return {
        team
    };
};

const TeamNav = (props) => {
    return (
        <h2>{props.team.name}</h2>
    )
}

export default connect(mapStateToProps, null)(TeamNav);