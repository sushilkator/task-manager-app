import React from 'react';
import '../styles/TaskFilter.css';

const TaskFilter = ({ statusFilter, setStatusFilter }) => {
    return (
        <div className="task-filter-container">
            <select
                className="task-filter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
            >
                <option value="All">All</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
        </div>
    );
};

export default TaskFilter;
