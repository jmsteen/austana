import React from 'react';
import TopBar from '../top_bar/top_bar'

const AustanaGrid = ({currentUser, logout}) => {
    
    return (
        <section className="container">
            <TopBar currentUser={currentUser} logout={logout} />
            <div className="item side-bar">
                <img className="side-logo" src={window.logo} alt="logo"/>
            </div>

            <main className="item austana-main">Main Section</main>
        </section>
    )
    
};

export default AustanaGrid;