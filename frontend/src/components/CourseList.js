// src/components/CourseList.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No estás autenticado');
        return;
      }

      try {
        const response = await api.get('/courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(response.data);
      } catch (err) {
        setError('Error al cargar los cursos');
      }
    };

    fetchCourses();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Cursos disponibles</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duración:</strong> {course.duration} horas</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
