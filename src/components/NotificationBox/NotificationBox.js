import React from 'react';
import './NotificationBox.css';

const NotificationBox = () => {
    return (
        <div className="notificationBox">
            <div className="contentWrapper">
                <h1 className="welcomeText">Welcome back, John Doe</h1>
                <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy. </p>
                <p><a href="#">Look here for more information</a></p>
                <button className="closeButton">X</button>
            </div>
        </div>
    );
}

export default NotificationBox;
