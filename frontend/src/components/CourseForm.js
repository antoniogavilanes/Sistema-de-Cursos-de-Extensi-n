// src/components/CourseForm.js
import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [instructor, setInstructor] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Debes estar autenticado para agregar un curso');
      return;
    }

    const courseData = { title, description, duration, instructor };

    try {
      await api.post('/courses', courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/courses');
    } catch (err) {
      setError('Error al agregar el curso');
    }
  };

  return (
    <div>
      <h2>Agregar nuevo curso</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Duración (horas):</label>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </div>
        <div>
          <label>Instructor:</label>
          <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} required />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Agregar curso</button>
      </form>
    </div>
  );
};

export default CourseForm;
