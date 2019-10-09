import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({currentUser, logout}) => {
    
    const welcome = () => {
        return <nav className="top-bar">
            <h2>Home</h2>
            <h2>Welcome {currentUser.email}</h2>
            <div className="dropdown">
                <span>JS</span>
                <div className="dropdown-content">
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </nav>
    };

    return welcome();
};

export default Home;