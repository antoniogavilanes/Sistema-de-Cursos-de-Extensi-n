// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Courses from './components/Courses';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm isRegister={false} />} /> {/* Iniciar sesión */}
        <Route path="/register" element={<AuthForm isRegister={true} />} /> {/* Registrar */}
        <Route path="/courses" element={<Courses />} /> {/* Cursos */}
      </Routes>
    </Router>
  );
};

export default App;
