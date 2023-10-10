import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskBox.css';

const TaskCard = ({ task }) => {
    const [completed, setCompleted] = useState(task.completed);

    const formatDate = (isoDate) => {
        const options = { month: 'short', day: 'numeric' };
        return new Date(isoDate).toLocaleDateString(undefined, options);
    };

    const toggleStatus = () => {
        setCompleted(!completed);
    };
    
    const formattedDate = formatDate(task.createdAt);

    const getBellIcon = (priority) => {
        switch (priority) {
            case 'High':
                return <span className="bell-icon" style={{color: 'red'}}>🔔</span>;
            case 'Medium':
                return <span className="bell-icon" style={{color: 'yellow'}}>🔔</span>;
            case 'Low':
                return <span className="bell-icon" style={{color: 'blue'}}>🔔</span>;
            default:
                return null;
        }
    }
    return (
        <div className="task-card">
            <div className="task-info">
                <div className="task-priority">
                    {getBellIcon(task.priority)}
                </div>
                <p>{task && task.todo}</p>
            </div>
            <div className="status-button">
                <button
                    className={`status-btn ${completed ? 'done' : 'in-progress'}`}
                    onClick={toggleStatus}
                >
                    {completed ? 'Done' : 'In Progress'}
                </button>
                <p className="date">{formattedDate}</p>
            </div>
        </div>
    );       
};

const TaskBox = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const tasksPerPage = 8;
    const [tasksData, setTasksData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
            .then((response) => {
                setTasksData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const totalPages = Math.ceil(tasksData.length / tasksPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNumberedPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = currentPage * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    const tasksToShow = tasksData.slice(startIndex, endIndex);

    return (
        <div className="taskBox">
            <div className="contentWrapper">
                <h2>Tasks</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {tasksToShow.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                        <div className="pagination">
                            <button onClick={handlePrevPage}>{'<'}</button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    className={`pagination-button ${currentPage === index ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => handleNumberedPage(index)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button onClick={handleNextPage}>{'>'}</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskBox;
