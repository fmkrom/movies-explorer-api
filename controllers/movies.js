const Movie = require('../models/movie');

const { BadRequestError } = require('../errors/400-BadRequestError');
const { NotFoundError } = require('../errors/404-NotFoundError');
const { InternalServerError } = require('../errors/500-InternalServerError');
const { ForbiddenError } = require('../errors/403-ForbiddenError');

const { errorMessage } = require('../utils/constants');

async function getMovies(req, res) {
  try {
    const movies = await Movie.find({}).populate('user');
    res.send(movies);
    return;
  } catch (err) {
    throw new InternalServerError(errorMessage.internalServerError);
  }
}

function createMovie(req, res, next) {
  Movie.create({
    country: req.body.country,
    director: req.body.director,
    duration: req.body.duration,
    year: req.body.year,
    description: req.body.description,
    image: req.body.image,
    trailer: req.body.trailer,
    owner: req.user._id,
    movieId: req.body.movieId,
    nameRU: req.body.nameRU,
    nameEN: req.body.nameEN,
    thumbnail: req.body.thumbnail,
  })
    .then((movie) => { res.send({ savedMovie: movie }); })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError(errorMessage.badRequest);
      } else {
        throw new InternalServerError(errorMessage.internalServerError);
      }
    })
    .catch(next);
}

function deleteMovie(req, res, next) {
  Movie.findById(req.params.movieID)
    // eslint-disable-next-line consistent-return
    .then((movie) => {
      const movieIsOwn = Boolean(movie.owner.toString() === req.user._id.toString());
      if (!movieIsOwn) {
        throw new ForbiddenError(errorMessage.forbidden);
      } else if (movieIsOwn) {
        return movie.remove()
          .then((deletedMovie) => res.send({ deletedMovie }));
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError(errorMessage.badRequest);
      } else if (err.name === 'TypeError') {
        throw new NotFoundError(errorMessage.notFound);
      } else if (err.name === 'NotFound') {
        throw new NotFoundError(errorMessage.notFound);
      }
      throw err;
    })
    .catch(next);
}

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
