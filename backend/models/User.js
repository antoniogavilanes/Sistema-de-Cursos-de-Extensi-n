const mongoose = require('mongoose');

// Definimos el esquema para User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'], // Roles posibles
    default: 'student',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creamos el modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
