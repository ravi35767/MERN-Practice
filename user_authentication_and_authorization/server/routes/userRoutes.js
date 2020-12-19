const { Router } = require('express');
const { signUp, getUsers, login, logout } = require('../controllers/userController');

const router = Router();

router.post('/signup', signUp);
router.get('/users', getUsers);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
