import React from 'react';
import TopBar from '../top_bar/top_bar';
import MainContainer from '../main/main_container';
import SideBarContainer from '../sidebar/sidebar_container';

const AustanaGrid = ({currentUser, logout}) => {
    
    return (
        <section className="container">
            <TopBar currentUser={currentUser} logout={logout} />
            <SideBarContainer />

            <MainContainer />
        </section>
    )
    
};

export default AustanaGrid;