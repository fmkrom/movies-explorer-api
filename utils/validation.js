const { Joi } = require('celebrate');

const createMovieValidation = Joi.object().keys({
  country: Joi.string().required(),
  director: Joi.string().required(),
  duration: Joi.number().required(),
  year: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  trailer: Joi.string().required(),
  movieId: Joi.number().required(),
  nameRU: Joi.string().required(),
  nameEN: Joi.string().required(),
  thumbnail: Joi.string().required(),
});

const deleteMovieValidation = Joi.object().keys({
  movieID:
    Joi.string()
      .required()
      .length(24)
      .hex(),
});

const editUserInfoValidation = Joi.object().keys({
  email:
      Joi.string()
        .required()
        .min(2)
        .max(30)
        .email({ tlds: { allow: false } }),
  name:
    Joi.string()
      .required()
      .min(2)
      .max(30),
});

const signUpValidation = Joi.object().keys({
  email:
    Joi.string()
      .required()
      .min(2)
      .max(30)
      .email({ tlds: { allow: false } }),
  password: Joi.string()
    .required()
    .min(8),
  name: Joi.string()
    .min(2)
    .max(30),
});

const signInValidation = Joi.object().keys({
  email:
    Joi.string()
      .required()
      .min(2)
      .max(30)
      .email({ tlds: { allow: false } }),
  password:
    Joi.string()
      .required()
      .min(8),
});

module.exports = {
  signUpValidation,
  signInValidation,
  createMovieValidation,
  deleteMovieValidation,
  editUserInfoValidation,
};
