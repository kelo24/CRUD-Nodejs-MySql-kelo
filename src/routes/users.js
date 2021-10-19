const express = require('express');
const usersRouter = express.Router();

const usersController = require('../controllers/usersController');

// homepage
usersRouter.get('/', usersController.homepage);

// register
usersRouter.get('/register', usersController.registerPage);
usersRouter.post('/register', usersController.registerUser);

// login
usersRouter.get('/login', usersController.loginPage);
usersRouter.post('/login', usersController.loginUser);

// loged -> account
usersRouter.get('/account', usersController.accountPage);


module.exports = usersRouter;
// module.exports.routerx = router;