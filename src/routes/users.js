const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

// homepage
router.get('/', usersController.homepage);

// register
router.get('/register', usersController.registerPage);
router.post('/register', usersController.registerUser);

// login
router.get('/login', usersController.loginPage);
router.post('/login', usersController.loginUser);

// loged -> account
router.get('/account', usersController.accountPage);


module.exports = router;