import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import NotificationBox from './components/NotificationBox/NotificationBox';

function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <SideNavBar />
        <div className="content">
          <HeaderBar />
          <NotificationBox />
        </div>
      </div>
    </div>
  );
}

export default App;