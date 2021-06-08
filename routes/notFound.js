const router = require('express').Router();
const { NotFoundError } = require('../errors/404-NotFoundError');
const { UnauthorizedError } = require('../errors/401-UnauthorizedError');

const { errorMessage } = require('../utils/constants');

router.use('*', (res) => {
  if (res.statusCode === 401) {
    throw new UnauthorizedError(errorMessage.unauthorized);
  } else {
    throw new NotFoundError(errorMessage.notFound);
  }
});

module.exports = router;
