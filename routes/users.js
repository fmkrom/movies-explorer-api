const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/me', getUserInfo);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(2).max(30).email({ tlds: { allow: false } }),
    name: Joi.string().required().min(2).max(30),
  }),
}),
updateUserInfo);

module.exports = router;
