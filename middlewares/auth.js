require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;

const jwt = require('jsonwebtoken');
require('dotenv').config();

const { UnauthorizedError } = require('../errors/401-UnauthorizedError');
const { errorMessage } = require('../utils/constants');

function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError(errorMessage.unauthorized);
  }
  const token = authorization.replace('Bearer ', '');

  if (!token) { throw new UnauthorizedError(errorMessage.tokenRequired); }

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new UnauthorizedError(errorMessage.unauthorized);
  }
  req.user = payload;

  next();
}

module.exports = { auth };
