// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Cambia esto si tu API está en otro puerto

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
