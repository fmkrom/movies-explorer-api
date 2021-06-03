const { NODE_ENV, JWT_SECRET } = process.env;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { BadRequestError } = require('../errors/400-BadRequestError');
const { NotFoundError } = require('../errors/404-NotFoundError');
const { UnauthorizedError } = require('../errors/401-UnauthorizedError');
const { InternalServerError } = require('../errors/500-InternalServerError');
const { ConflictError } = require('../errors/409-ConflictError');

function signUp(req, res, next) {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
    }))
    .then((user) => res.send({
      name: user.name,
      email: user.email,
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else if (err.code === 11000) {
        throw new ConflictError('Пользователь с такими данными уже зарегистрирован');
      } else if (err.name === 'NotFound') {
        throw new NotFoundError('Данные не найдены');
      } else if (err.statusCode === 500) {
        throw new InternalServerError('Ошибка на сервере при получении данных пользователей');
      }
    })
    .catch(next);
}

function signIn(req, res, next) {
  User.findUserByCredentials(req.body.email, req.body.password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res.send(token);
    })
    .catch((err) => {
      if (err.statusCode === 500) {
        throw new InternalServerError('Ошибка на сервере при авторизации пользователя');
      } else {
        throw new UnauthorizedError('Неверный логин или пароль');
      }
    })
    .catch(next);
}

module.exports = {
  signUp,
  signIn,
};
