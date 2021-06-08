const router = require('express').Router();
const { NotFoundError } = require('../errors/404-NotFoundError');
const { UnauthorizedError } = require('../errors/401-UnauthorizedError');
const { auth } = require('../middlewares/auth');

router.use('*', auth, (res) => {
  if (res.statusCode === 401) {
    throw new UnauthorizedError('Необходима авторизация пользователя');
  } else {
    throw new NotFoundError('Данные не найдены');
  }
});

module.exports = router;
