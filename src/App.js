import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import SideNavBar from './components/SideNavBar/SideNavBar';
import NotificationBox from './components/NotificationBox/NotificationBox';
import TaskBox from './components/TaskBox/TaskBox';
import ActivityFeed from './components/ActivityFeed/ActivityFeed';
import TaskPriorities from './components/TaskPriorities/TaskPriorities';

function App() {
  return (
    <div className="App">
      <div className="mainContent">
        <SideNavBar />
        <div className="content">
          <HeaderBar />
          <NotificationBox />
          <div className ="content-container">
            <TaskBox />
            <div className='right-grid'>
              <ActivityFeed />
              <TaskPriorities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;