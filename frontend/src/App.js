// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthForm from './components/AuthForm';
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Sistema de Gestión de Cursos</h1>
        <Routes>
          <Route path="/" element={<AuthForm isRegister={false} />} />
          <Route path="/register" element={<AuthForm isRegister={true} />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/add-course" element={<CourseForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
