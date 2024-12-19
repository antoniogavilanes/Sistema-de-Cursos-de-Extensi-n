const express = require('express');
const Course = require('../models/Course');
const authMiddleware = require('../middlewares/auth'); // Importamos el middleware de autenticación
const router = express.Router();

// Obtener todos los cursos (modificado para que solo devuelva los cursos del usuario autenticado)
router.get('/', async (req, res) => {
  try {
    console.log("Obteniendo cursos..."); // Esto te ayudará a verificar que la solicitud se está ejecutando
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error("Error al obtener los cursos:", err);
    res.status(500).json({ message: 'Error al obtener los cursos', error: err });
  }
});


// Crear un nuevo curso
// Crear un nuevo curso
router.post('/', async (req, res) => {
  const { title, description, duration, instructor } = req.body;
  try {
    const newCourse = new Course({ title, description, duration, instructor });
    await newCourse.save();
    res.status(201).json({ message: 'Curso creado', course: newCourse });
  } catch (err) {
    console.error('Error al crear el curso:', err);  // Esto te ayudará a ver el error específico
    res.status(500).json({ message: 'Error al crear el curso', error: err });
  }
});


module.exports = router;
