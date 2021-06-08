const { errorMessage } = require('./constants');

const limiterSettings = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: errorMessage.tooManyRequests,
};

module.exports = { limiterSettings };
