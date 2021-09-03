const router = require('express').Router();
const { celebrate } = require('celebrate');

const {
  editUserInfoValidation,
} = require('../utils/validation');

const {
  getAllUsers,
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/', getAllUsers);

router.get('/me', getUserInfo);

router.patch('/me',
  celebrate({ body: editUserInfoValidation }), updateUserInfo);

module.exports = router;
