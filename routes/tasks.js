const router = require('express').Router();
const { celebrate } = require('celebrate');

const {
  getTasks,
  createTask,
} = require('../controllers/tasks');

router.get('/', getTasks);
router.post('/', createTask);


// celebrate({ body: createMovieValidation }),
  
/*router.delete('/:movieID',
  celebrate({ params: deleteMovieValidation }),
  deleteMovie);*/

module.exports = router;
