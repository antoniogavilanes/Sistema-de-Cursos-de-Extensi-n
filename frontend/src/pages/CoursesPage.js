import React, { useState, useEffect } from 'react';
import api from '../api'; // Asegúrate de que api.js esté configurado correctamente
import './CoursesPage.css'; // Archivo CSS para estilos personalizados

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '', duration: '', instructor: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // Obtener los cursos del usuario
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses');
        setCourses(response.data);
      } catch (err) {
        console.error('Error al obtener cursos:', err);
        setError('Error al cargar los cursos');
      }
    };

    fetchCourses();
  }, []);

  const handleCreateCourse = async (e) => {
    e.preventDefault();

    if (!newCourse.title || !newCourse.description || !newCourse.duration || !newCourse.instructor) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await api.post('/courses', newCourse);
      setCourses([...courses, response.data]);
      setNewCourse({ title: '', description: '', duration: '', instructor: '' });
    } catch (err) {
      console.error('Error al crear el curso:', err);
      setError('Error al crear el curso');
    }
  };

  return (
    <div className="courses-page">
      <h1>Mis Cursos</h1>

      {error && <p className="error">{error}</p>}

      <div className="cards-container">
        {courses.map(course => (
          <div className="card" key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p><strong>Duración:</strong> {course.duration} horas</p>
            <p><strong>Instructor:</strong> {course.instructor}</p>
          </div>
        ))}
      </div>

      <h2>Crear un Nuevo Curso</h2>
      <form className="create-course-form" onSubmit={handleCreateCourse}>
        <input
          type="text"
          placeholder="Título del curso"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <textarea
          placeholder="Descripción del curso"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Duración en horas"
          value={newCourse.duration}
          onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nombre del instructor"
          value={newCourse.instructor}
          onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
        />
        <button type="submit">Crear Curso</button>
      </form>
    </div>
  );
};

export default CoursesPage;
