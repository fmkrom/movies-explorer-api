const router = require('express').Router();
const { celebrate } = require('celebrate');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  createMovieValidation,
  deleteMovieValidation,
} = require('../utils/validation');

router.get('/', getMovies);

router.post('/',
  celebrate({ body: createMovieValidation }),
  createMovie);

router.delete('/:movieID',
  celebrate({ params: deleteMovieValidation }),
  deleteMovie);

module.exports = router;
