import React from 'react';
import './SideNavBar.css';

const SideNavBar = () => {
    return (
        <div className="sideNavBar">
            <div className="sidebarHeader">
                Acmy Solutions
            </div>
            <ul>
                <button className="dashboardButton">
                    <img src={`${process.env.PUBLIC_URL}/dashboardIcon.png`} />
                    Dashboard
                </button>           
            </ul>
        </div>
    );
}

export default SideNavBar;
