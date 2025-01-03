const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'No autorizado' });
  }

  try {
    const decoded = jwt.verify(token, 'tu_clave_secreta');
    req.user = decoded; // `decoded` debería contener información del usuario
    next();
  } catch (err) {
    res.status(401).send({ error: 'Token inválido' });
  }
};

module.exports = authMiddleware;
