// src/api.js
import axios from 'axios';

// Cambia esta URL con la del backend
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL del backend
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});

export default api;
