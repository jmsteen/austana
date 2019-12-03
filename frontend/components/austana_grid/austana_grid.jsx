import React from 'react';
import TopBarContainer from '../top_bar/top_bar_container';
import MainContainer from '../main/main_container';
import SideBarContainer from '../sidebar/sidebar_container';

const AustanaGrid = ({currentUser, logout}) => {
    
    return (
        <section className="container">
            <TopBarContainer />
            <SideBarContainer />
            <MainContainer />
        </section>
    )
    
};

export default AustanaGrid;