const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');

const app = express();

// importing route index
const routes = require('./routes/index');


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
    port: '3307',
    database: 'crudnodejsmysqlkelo',
}, 'single'));

// routes
app.use('/', routes);

// static files
// app.use(express.static(path.join(__dirname, 'public')));



// starting the server
app.listen(app.get('port'), function () {
    console.log(`Server on port ${app.get('port')}`)
});