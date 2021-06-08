require('dotenv').config();

const { DATABASE, NODE_ENV } = process.env;
const { PORT = 3000 } = process.env;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const routes = require('./routes/index');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const { errorMessage } = require('./utils/constants');

const { mongooseSettings, DATABASE_DEV } = require('./utils/constants');

const { limiterSettings } = require('./utils/limiterSettings');

const limiter = rateLimit(limiterSettings);

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

app.use(limiter);

app.use(routes);

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  res.status(err.statusCode)
    .send({ message: err.statusCode ? err.message : errorMessage.internalServerError });
  next();
});

app.listen(PORT, () => {
  console.log(`Server launched sucesfully! App listening on port: ${PORT}`);
});
