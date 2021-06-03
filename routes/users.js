const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  editUserInfoValidation,
} = require('../utils/validation');

const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/me', getUserInfo);

router.patch('/me',
  celebrate({ body: editUserInfoValidation }), updateUserInfo);

module.exports = router;
