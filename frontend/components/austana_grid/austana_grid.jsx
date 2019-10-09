import React from 'react';
import { Link } from 'react-router-dom';

const AustanaGrid = ({currentUser, logout}) => {
    
    return (
        <section className="container">
            <nav className="item top-bar">
                <h2>Home</h2>
                <h2>Welcome {currentUser.email}</h2>
                <div className="dropdown">
                    <span>JS</span>
                    <div className="dropdown-content">
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>

            <div className="item side-bar">
                <img src={window.logo} alt="logo"/>
            </div>

            <main className="item austana-main">Main Section</main>
        </section>
    )
    
};

export default AustanaGrid;