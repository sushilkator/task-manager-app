import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = (user) => axios.post(`${API_URL}/register`, user);
const login = (credentials) => axios.post(`${API_URL}/login`, credentials);

const getToken = () => localStorage.getItem('token');

const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default {
    register,
    login,
    getToken,
    setAuthToken,
};
