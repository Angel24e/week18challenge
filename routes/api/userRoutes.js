const router = require('express').Router();
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    addThought,
    deleteThought,
} = require('../../controllers/studentController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').delete(deleteUser);

router.route('/:userId').put(updateUser);

router.route('/:userId/thoughts').post(addThought);

router.route('/:userId/thoughts/:thoughtId').delete(deleteThought)

module.exports = router;
