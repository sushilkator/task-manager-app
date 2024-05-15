import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';

const TaskList = ({ tasks, fetchTasks }) => {
    return (
        <div className="task-list-container">
            <ul className="task-list">
                {tasks.map((task) => (
                    <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
