const UserModel = require('../models/user.model');
const { signJwt } = require('../utils/jwt.util');
const bcrypt = require('bcryptjs');
const SALT = 10;

const RegistroController = (req, res, next) => {
  const { email, password, username } = req.body;
  UserModel.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Error('Email ya en uso');
      }
      const saltBcrypt = bcrypt.genSaltSync(SALT);
      const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);

      return UserModel.create({ email, password: hashBcrypt, username });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      if (err.message === 'Email ya en uso') {
        res.status(400).json({ errorMessage: err.message });
        return;
      }
      next(err);
    });
};

const LoginController = (req, res, next) => {
  const { email, password } = req.body;

  UserModel.findOne({ email })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ token: signJwt(user._id.toString(), user.email) });
      } else {
        res.status(400).json({ errorMessage: 'Email o contraseña no valida.' });
      }
    })
    .catch(next);
};

module.exports = {
  RegistroController,
  LoginController,
};
