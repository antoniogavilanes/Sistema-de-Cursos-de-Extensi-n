const mongoose = require('mongoose');

// Definimos el esquema para Course
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // En horas
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creamos el modelo
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
