import React, { useState } from 'react';
import taskService from '../services/taskService';
import '../styles/TaskForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskForm = ({ fetchTasks }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'To Do'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title) return;

        try {
            await taskService.createTask(formData);
            fetchTasks();
            setFormData({ title: '', description: '', status: 'To Do' });
            toast.success('Task added successfully!');
        } catch (error) {
            console.error('Error creating task', error);
            toast.error('Failed to add task.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            ></textarea>
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
            >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
            <button type="submit" className="task-button">Add Task</button>
        </form>
    );
};

export default TaskForm;
