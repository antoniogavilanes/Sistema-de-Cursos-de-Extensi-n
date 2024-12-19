const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Obtener todos los cursos
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los cursos', error: err });
  }
});

// Crear un nuevo curso
router.post('/', async (req, res) => {
  const { title, description, duration, instructor } = req.body;
  try {
    const newCourse = new Course({ title, description, duration, instructor });
    await newCourse.save();
    res.status(201).json({ message: 'Curso creado', course: newCourse });
  } catch (err) {
    res.status(500).json({ message: 'Error al crear el curso', error: err });
  }
});

module.exports = router;
