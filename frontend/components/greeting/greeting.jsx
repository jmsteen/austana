import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

    const welcome = () => {
        return <hgroup>
            <h2>Welcome {currentUser.email}</h2>
            <button onClick={logout}>Logout</button>
        </hgroup>
    };

    const sessionLinks = () => {
        return <nav>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Login</Link>
            </nav>
    };

    return currentUser ? welcome() : sessionLinks();
};

export default Greeting;