import React, { useState, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
import './TaskPriorities.css';

const TaskPriorities = () => {
    const defaultData = {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
            data: [0, 0, 0],
            backgroundColor: ['red', 'yellow', 'blue'],
            hoverBackgroundColor: ['darkred', 'goldenrod', 'darkblue']
        }]
    };
    
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
        .then(response => response.json())
        .then(tasks => {
            const highCount = tasks.filter(task => task.priority === "High").length;
            const mediumCount = tasks.filter(task => task.priority === "Medium").length;
            const lowCount = tasks.filter(task => task.priority === "Low").length;

            setData({
                labels: ['High', 'Medium', 'Low'],
                datasets: [{
                    data: [highCount, mediumCount, lowCount],
                    backgroundColor: ['red', 'yellow', 'blue'],
                    hoverBackgroundColor: ['darkred', 'goldenrod', 'darkblue']
                }]
            });
        });
    }, []);

    return (
        <div className="taskPriorities">
            <div className="contentWrapper">
                <h2>Tasks Priorities</h2>
                {/* <Doughnut data={data} /> */}
            </div>
        </div>
    );    
}

export default TaskPriorities;
