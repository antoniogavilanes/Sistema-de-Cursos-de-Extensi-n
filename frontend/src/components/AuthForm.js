// src/components/AuthForm.js
import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ isRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = isRegister
      ? { name, email, password }
      : { email, password };

    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login';
      const response = await api.post(endpoint, payload);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/courses');
      }
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Error al procesar la solicitud');
    }
  };

  return (
    <div className="auth-form">
      <h2>{isRegister ? 'Registrar usuario' : 'Iniciar sesión'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div>
            <label>Nombre:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
        )}
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">{isRegister ? 'Registrar' : 'Iniciar sesión'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
