const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT *  FROM users', (err, users) => {

            console.log(users);

            if (err) {
                res.json(err);
            }
            res.json(users);
        })
    })
})

module.exports = apiRouter;