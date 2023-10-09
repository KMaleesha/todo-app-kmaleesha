import React from 'react';
import './HeaderBar.css';

const HeaderBar = () => {
    return (
        <div className="headerBar">
            <h2>Dashboard</h2>
            <div className="headerRight">
                <span className="bellIcon">🔔</span>
                <span className="userIcon">
                    <img src={`${process.env.PUBLIC_URL}/userIcon.png`} alt="User" />
                    <span>▼</span>
                </span>
            </div>
        </div>
    );
}

export default HeaderBar;
