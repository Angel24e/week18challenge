const router = require('express').Router();
const {
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/courseController.js');

router.route('/').get(getThoughts).post(createThought);

router
  .route('/:thoughtId')
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;