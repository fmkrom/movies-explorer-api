require('dotenv').config();

const { DATABASE, NODE_ENV } = process.env;
const { PORT = 3000 } = process.env;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { celebrate } = require('celebrate');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');

const usersRoutes = require('./routes/users');
const moviesRoutes = require('./routes/movies');
const notFoundRoutes = require('./routes/notFound');

const { auth } = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { processErrors } = require('./utils/utils');

const { mongooseSettings, DATABASE_DEV } = require('./utils/constants');

const {
  signUpValidation,
  signInValidation,
} = require('./utils/validation');

const {
  signUp,
  signIn,
} = require('./controllers/auth');

const app = express();

app.use(cors());
app.use(helmet());

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(NODE_ENV === 'production' ? DATABASE : DATABASE_DEV, mongooseSettings);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

// Регистрация:
app.use('/signup',
  celebrate({ body: signUpValidation }),
  signUp);

// Авторизация (логин)
app.use('/signin',
  celebrate({ body: signInValidation }),
  signIn);

app.use('/users', auth, usersRoutes);
app.use('/movies', auth, moviesRoutes);
app.use('*', notFoundRoutes);

app.use(errorLogger);

app.use(errors());

app.use(processErrors);

app.listen(PORT, () => {
  console.log(`Server launched sucesfully! App listening on port: ${PORT}`);
});
