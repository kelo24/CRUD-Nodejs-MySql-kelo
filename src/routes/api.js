const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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

module.exports = router;