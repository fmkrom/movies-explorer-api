const router = require('express').Router();
const { celebrate } = require('celebrate');

const usersRoutes = require('./users');
const moviesRoutes = require('./movies');
const notFoundRoutes = require('./notFound');

const {
  signUp,
  signIn,
} = require('../controllers/auth');

const {
  signUpValidation,
  signInValidation,
} = require('../utils/validation');

const { auth } = require('../middlewares/auth');

// Регистрация:
router.use('/signup',
  celebrate({ body: signUpValidation }),
  signUp);

// Авторизация (логин)
router.use('/signin',
  celebrate({ body: signInValidation }),
  signIn);

router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);
router.use('*', auth, notFoundRoutes);

module.exports = router;
