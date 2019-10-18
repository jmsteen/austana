import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({entities: { taskLists }}, ownProps) => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

class TaskList extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return <div>

        </div>
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);