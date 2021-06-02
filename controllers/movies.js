const Movie = require('../models/movie');
const { handleErr } = require('../utils/utils');

const { BadRequestError } = require('../errors/400-BadRequestError');
const { NotFoundError } = require('../errors/404-NotFoundError');
const { InternalServerError } = require('../errors/500-InternalServerError');
const { ForbiddenError } = require('../errors/403-ForbiddenError');

async function getMovies(req, res) {
  try {
    const movies = await Movie.find({}).populate('user');
    res.send(movies)
    return;
  } catch (err) {
    throw new InternalServerError(`Ошибка на сервере: ${err}`);
  }
}

function createMovie(req, res, next){
  Movie.create({
      country: req.body.country,
      director: req.body.director, 
      duration: req.body.duration,
      year: req.body.year,
      description: req.body.description,
      image: req.body.image,
      trailer: req.body.trailer,
      owner: req.user._id,
      nameRU: req.body.nameRU,
      nameEN: req.body.nameEN,
      thumbnail: req.body.thumbnail,
    })
    .then((movie)=>{res.send(movie)})
    .catch((err)=> {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Переданы некорректные данные для создания фильма');
      } else {
        throw new InternalServerError('Ошибка на сервере');
      }
    })
  .catch(next);
}

function deleteMovie(req, res, next){
  Movie.findById(req.params.movieId)
  .then((movie)=>{
    const movieIsOwn = Boolean(movie.owner == req.user._id);  
    if (!movieIsOwn) {
      throw new ForbiddenError('У пользователя нет прав на удаление фильма');
    } else if (movieIsOwn) {
      Movie.findByIdAndRemove(movie._id)
        .then((deletedMovie) => res.send({ deletedMovie }));
    }
  })
  .catch((err)=>{
    console.log(err);
    if (err.name === 'CastError' || err.name === 'ValidationError') {
      throw new BadRequestError('Переданы некорректные данные');
    } else if (err.name === 'TypeError') {
      throw new NotFoundError('Фильм не найден');
    } else if (err.statusCode == 403){
      throw new ForbiddenError('У пользователя нет прав на удаление фильма');
    }
  })
  .catch(next);
}

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
