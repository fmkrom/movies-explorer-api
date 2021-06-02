const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { celebrate, Joi } = require('celebrate');
const { errors } = require('celebrate');
const cors = require('cors');

const usersRoutes = require('./routes/users');
const moviesRoutes = require('./routes/movies');
const notFoundRoutes = require('./routes/notFound');

const { auth } = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const {
  signUp,
  signIn,
} = require('./controllers/auth');

const { PORT = 3000 } = process.env;
const app = express();

app.use(cors());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/filmsdb',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// Регистрация:
app.use('/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().min(2).max(30).email({ tlds: { allow: false } }),
      password: Joi.string().required().min(8),
      name: Joi.string().min(2).max(30),
    }),
  }), signUp);

  // Авторизация (логин)
  app.use('/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().min(2).max(30).email({ tlds: { allow: false } }),
      password: Joi.string().required().min(8),
    }),
  }), signIn);

app.use('/users', auth, usersRoutes);
app.use('/movies', auth, moviesRoutes);
app.use('*', notFoundRoutes);

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  res.status(err.statusCode).send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server launched sucesfully! App listening on port: ${PORT}`);
});
