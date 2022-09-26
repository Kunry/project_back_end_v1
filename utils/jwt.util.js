const jwt = require('jsonwebtoken');

// NO SE OS OCURRA PONER ESTO AQUI, VA EN EL .ENV BURR@S
const signJwt = (idUser, email) => {
  return jwt.sign({ email }, 'SECRET' , { expiresIn: '7d', subject: idUser});
};

const verifyJwt = (token) => {
  return jwt.verify(token, 'SECRET');
}

module.exports = {
  signJwt,
  verifyJwt
}