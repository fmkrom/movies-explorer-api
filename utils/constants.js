const DATABASE_DEV = 'mongodb://localhost:27017/noterdb';

const mongooseSettings = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const errorMessage = {
  badRequest: 'Переданы некорректные данные',
  unauthorized: 'Необходима авторизация пользователя',
  tokenRequired: 'Необходима авторизация: отсутствует токен',
  incorrectLoginOrPassword: 'Неверный логин или пароль',
  forbidden: 'У пользователя нет прав для удаления фильма',
  notFound: 'Данные не найдены',
  userAlreadyRegistered: 'Пользователь с такими данными уже зарегистрирован',
  internalServerError: 'На сервере произошла ошибка',
  invalidUrl: 'Неправильный формат ссылки',
  invalidEmail: 'Неправильный формат электронной почты',
  tooManyRequests: 'Слишком много запросов с этого IP. Попробуйте через 1 час',
};

module.exports = {
  mongooseSettings,
  DATABASE_DEV,
  errorMessage,
};
