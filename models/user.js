const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { default: validator } = require('validator');

const { errorMessage } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  email: {
    isEmail: true,
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: errorMessage.invalidEmail,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error(errorMessage.incorrectLoginOrPassword));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error(errorMessage.incorrectLoginOrPassword));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
