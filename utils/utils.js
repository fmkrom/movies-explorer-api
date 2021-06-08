const { BadRequestError } = require('../errors/400-BadRequestError');
const { NotFoundError } = require('../errors/404-NotFoundError');
const { InternalServerError } = require('../errors/500-InternalServerError');

const { errorMessage } = require('./constants');

function handleErr(err) {
  if (err.name === 'CastError') {
    throw new BadRequestError(errorMessage.badRequest);
  } else if (err.message === 'NotFound') {
    throw new NotFoundError(errorMessage.notFound);
  } else {
    throw new InternalServerError(errorMessage.internalServerError);
  }
}

function processErrors(err, req, res) {
  res.status(err.statusCode)
    .send({ message: err.message });
}

module.exports = { handleErr, processErrors };
