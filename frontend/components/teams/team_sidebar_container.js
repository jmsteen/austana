import { connect } from 'react-redux';
import TeamSideBar from './team_sidebar';

const msp = state => {
    return {}
};

export default connect(msp, null)(TeamSideBar);