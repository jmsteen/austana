import React from 'react';
import { Link } from 'react-router-dom';
import TeamSideBarContainer from '../teams/team_sidebar_container';

class SideBar extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
    
        return <div className="item side-bar disable-text">
            <div className="side-header">
                <img className="side-logo" src={window.logo} alt="logo" />
            </div>
            <div className="side-nav">
                <Link className="side-nav-link" to='/home'>
                    <svg className="sidebar-icon" viewBox="0 0 40 40">
                        <path d="M37.9,15L22.2,3.8c-1.3-1-3.1-1-4.4-0.1L2.2,14.4c-0.7,0.5-0.9,1.4-0.4,2.1c0.5,0.7,1.4,0.9,2.1,0.4L6,15.4v12.3c0,4.6,3.7,8.3,8.3,8.3h11.4c4.6,0,8.3-3.7,8.3-8.3V15.9l2.1,1.5c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6C38.7,16.4,38.5,15.5,37.9,15z M31,27.7c0,2.9-2.4,5.3-5.3,5.3H14.3C11.4,33,9,30.6,9,27.7V13.3l10.6-7.2c0.2-0.2,0.5-0.2,0.8,0L31,13.7V27.7z"></path>
                    </svg>
                    <p>Home</p>
                </Link>
               
                <Link className="side-nav-link" to="/home">
                    <svg className="sidebar-icon" viewBox="0 0 40 40">
                        <path d="M20,2.5C10.4,2.5,2.5,10.4,2.5,20S10.4,37.5,20,37.5S37.5,29.6,37.5,20S29.6,2.5,20,2.5z M20,34.5C12,34.5,5.5,28,5.5,20S12,5.5,20,5.5S34.5,12,34.5,20S28,34.5,20,34.5z M27.7,15c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.2,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.4l-4.1-4.1c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l3.1,3.1l8.9-8.9C26.2,14.4,27.1,14.4,27.7,15z"></path>
                    </svg>
                    <p>My Tasks</p>
                </Link>
                
            </div>
            <TeamSideBarContainer />

            <div className="side-footer">

            </div>
        </div>
    }
}


export default SideBar;