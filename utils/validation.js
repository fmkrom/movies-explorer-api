const { Joi } = require('celebrate');

const createMovieValidation = Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(), 
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    trailer: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required(),
});

const deleteMovieValidation = Joi.object().keys({
    movieId: 
        Joi.string()
        .required()
        .length(24)
        .hex(),
});

module.exports = {
    createMovieValidation,
    deleteMovieValidation,   
}