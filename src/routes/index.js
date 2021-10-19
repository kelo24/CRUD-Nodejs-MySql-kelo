const express = require('express');
const router = express.Router();

// Importing routes
const usersRoute = require('./users');
const apiRoute = require('./api');

router.use('/', usersRoute);
router.use('/api', apiRoute);


module.exports = router;