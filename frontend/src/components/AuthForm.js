// src/components/AuthForm.js
import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ isRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
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

        if (isRegister) {
          setSuccessMessage('Registro completo');
          setTimeout(() => {
            navigate('/'); // Redirige a la página de inicio de sesión
          }, 2000);
        } else {
          navigate('/courses'); // Redirige a la página de cursos
        }
      }
    } catch (err) {
      setError(isRegister ? 'Error al registrarse' : 'Error al iniciar sesión');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="container">
      <div className="auth-form">
        <h2>{isRegister ? 'Registrar usuario' : 'Iniciar sesión'}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <button type="submit">{isRegister ? 'Registrar' : 'Iniciar sesión'}</button>
        </form>

        {!isRegister && (
          <div className="register-link">
            <p>No tienes cuenta?</p>
            <button onClick={handleRegisterRedirect}>Registrarse</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
