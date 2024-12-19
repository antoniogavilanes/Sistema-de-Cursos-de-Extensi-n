const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar rutas
const authRoutes = require('./routes/auth');  // Si tienes rutas de autenticación
const courseRoutes = require('./routes/courses');  // Rutas de cursos

// Configuración del servidor
const app = express();
app.use(express.json());  // Para manejar datos JSON en las peticiones
app.use(cors());  // Permitir solicitudes desde otros orígenes (CORS)

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/sistemacursos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Rutas // Rutas de autenticación (si las tienes)
app.use('/api/courses', courseRoutes);  // Rutas de gestión de cursos

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
