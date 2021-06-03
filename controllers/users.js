const { NODE_ENV, JWT_SECRET } = process.env;
const User = require('../models/user');

const { handleErr } = require('../utils/utils');

const { BadRequestError } = require('../errors/400-BadRequestError');
const { NotFoundError } = require('../errors/404-NotFoundError');

async function getUserInfo(req, res, next) {
  User.findById(req.user._id)
    .orFail(new Error('NotFound'))
    .then((user) => {
      res.send({ email: user.email, name: user.name });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные');
      } else if (err.message === 'NotFound') {
        throw new NotFoundError('Данные не найдены');
      }
    })
    .catch(next);
}

function updateUserInfo(req, res, next) {
  User.findByIdAndUpdate(
    req.user._id,
    {
      email: req.body.email,
      name: req.body.name,
    },
    {
      runValidators: true,
      new: true,
    },
  ).orFail(new Error('NotFound'))
    .then((updatedUser) => {
      res.send(updatedUser);
    })
    .catch((err) => {
      handleErr(err);
    })
    .catch(next);
}

module.exports = {
  getUserInfo,
  updateUserInfo,
};
