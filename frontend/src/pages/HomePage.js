import React, { useState, useEffect } from 'react';
import taskService from '../services/taskService';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [statusFilter, setStatusFilter] = useState('All');
    const navigate = useNavigate();

    useEffect(() => {
        const token = authService.getToken();
        if (token) {
            authService.setAuthToken(token);
            fetchTasks();
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const fetchTasks = async () => {
        try {
            const response = await taskService.getTasks();
            setTasks(response.data);
            console.log("Fetched tasks:", response.data);
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    };

    const filteredTasks = tasks.filter((task) =>
        statusFilter === 'All' ? true : task.status === statusFilter
    );

    return (
        <div className="container">
            <div className="top-bar">
                <h1 className="header">Task Manager</h1>
            </div>
            <div className="content">
                <div className="left-side">
                    <TaskForm fetchTasks={fetchTasks} />
                </div>
                <div className="right-side">
                    <TaskFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
                    <TaskList tasks={filteredTasks} fetchTasks={fetchTasks} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
