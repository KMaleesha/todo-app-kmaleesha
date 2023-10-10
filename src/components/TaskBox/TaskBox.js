import React, { useState } from 'react';
import './TaskBox.css';

const tasksData = [
    { id: 1, title: 'Contract #00124 need John Beige’s signature', status: 'Done', date: 'Sep 16' },
    { id: 2, title: 'Franklin More’s professional review is pending', status: 'Done', date: 'Sep 12' },
    // ... Add other tasks here
];

const TaskCard = ({ task }) => (
    <div className="task-card">
        <p>{task.title}</p>
        <button className={`status-btn ${task.status.toLowerCase()}`}>{task.status}</button>
        <span>{task.date}</span>
    </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination">
            {pages.map((page) => (
                <button
                    key={page}
                    className={currentPage === page ? 'active' : ''}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

const TaskBox = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    const totalPages = Math.ceil(tasksData.length / tasksPerPage);
    const tasksToShow = tasksData.slice(
        (currentPage - 1) * tasksPerPage,
        currentPage * tasksPerPage
    );

    return (
        <div className="taskBox">
            <div className="contentWrapper">
                <h2>Tasks</h2>
                {tasksToShow.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default TaskBox;
