import React from 'react';

const Welcome = (props) => {
    return <div>
        <div className="welcome disable-text">
            <img 
                className="welcome-image" 
                src={window.onboardWelcome}/>
            <h2>Welcome to Austana</h2>
            <p>We're glad you're here. Just one more step and you're good to go!</p>
            <button onClick={()=>props.history.push('/setup')}>
                Get Started
            </button>
        </div>
    </div>
}; 

export default Welcome;