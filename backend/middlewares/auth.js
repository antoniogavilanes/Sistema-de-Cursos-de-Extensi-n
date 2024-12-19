const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret123';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Token requerido');

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send('Token inválido');
  }
};

module.exports = authMiddleware;
