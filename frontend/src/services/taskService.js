import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

const getTasks = () => axios.get(API_URL);
const createTask = (task) => axios.post(API_URL, task);
const updateTask = (id, updates) => axios.put(`${API_URL}/${id}`, updates);
const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
};
