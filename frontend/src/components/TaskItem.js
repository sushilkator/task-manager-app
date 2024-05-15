import React from 'react';
import taskService from '../services/taskService';
import '../styles/TaskItem.css';

const TaskItem = ({ task, fetchTasks }) => {
    const updateTaskStatus = async (status) => {
        try {
            await taskService.updateTask(task._id, { status });
            fetchTasks();
        } catch (error) {
            console.error('Error updating task', error);
        }
    };

    const deleteTask = async () => {
        try {
            await taskService.deleteTask(task._id);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    return (
        <li className="task-item">
            <div className="task-header">
                <h3>{task.title}</h3>
                <button onClick={deleteTask} className="delete-button">Delete</button>
            </div>
            <p>{task.description}</p>
            <select
                className="task-status"
                value={task.status}
                onChange={(e) => updateTaskStatus(e.target.value)}
            >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
        </li>
    );
};

export default TaskItem;
