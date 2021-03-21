const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// Importing routes
const usersRoute = require('./routes/users');
const apiRoute = require('./routes/api');

// settings
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'kelvin2415',
    port: '3306',
    database: 'crudnodejsmysqlkelo',
}, 'single'));

// routes
app.use('/', usersRoute);
app.use('/api', apiRoute);

// static files
// app.use(express.static(path.join(__dirname, 'public')));



// get port
const portExpress = app.get('port');

// starting the server
app.listen(portExpress, function () {
    console.log(`Server on port ${portExpress}`)
});