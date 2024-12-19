const mongoose = require('mongoose');
const app = require('./app'); // Si tienes tu servidor configurado en app.js
const config = require('./config'); // Importamos la configuración

// Conectarse a la base de datos
mongoose.connect(config.dbURI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(3000, () => {
      console.log('Servidor corriendo en el puerto 3000');
    });
  })
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
  });