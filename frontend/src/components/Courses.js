// src/components/Courses.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="courses-container">
      <h2>Lista de Cursos</h2>
      {courses.length === 0 ? (
        <p>No hay cursos disponibles.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course._id}>{course.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Courses;
