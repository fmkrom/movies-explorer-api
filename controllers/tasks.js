const Task = require('../models/task');

const { BadRequestError } = require('../errors/400-BadRequestError');
const { NotFoundError } = require('../errors/404-NotFoundError');
const { InternalServerError } = require('../errors/500-InternalServerError');
const { ForbiddenError } = require('../errors/403-ForbiddenError');

const { errorMessage } = require('../utils/constants');

async function getTasks(req, res) {
  try {
    const tasks = await Task.find({}).populate('user');
    res.send(tasks);
    return;
  } catch (err) {
    throw new InternalServerError(errorMessage.internalServerError);
  }
};

const createTask = async (req, res) =>{
   try {
      const task = await Task.create({
        owner: req.user._id,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        created: Date.now(),
        rate: req.body.rate,
        status: req.body.status,
      });
        res.send({ task });
        return;
   } catch (err) {
    if (err.name === 'ValidationError') {
      throw new BadRequestError(errorMessage.badRequest);
    } else {
      throw new InternalServerError(errorMessage.internalServerError);
    }
   };
};

const deleteTaskByID = async (req, res) =>{
  try {
    const 
  }
};

module.exports = {
  getTasks,
  createTask,
};



/*


function createNewTask(req, res, next){
  Task.create({
    owner: req.user._id,
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    created: Date.now(),
    rate: req.body.rate,
    status: req.body.status,
  }).then((task)=> res.send({task}))
    .catch((err) =>{
      res.send({ err });
      
      if (err.name === 'CastError') {
        throw new BadRequestError('Нет данных!');
      } else if (err.name === 'ValidationError') {
        throw new BadRequestError('Сервер не нашелся!');
      } else {
        throw new InternalServerError(errorMessage.internalServerError);
      }
    })
    .catch(next);
};

deadline: Date.now(),

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
}*/