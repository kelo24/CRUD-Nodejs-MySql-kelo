// const util = require('util');
// const sleep = util.promisify(setTimeout);

const controller = {};


// homepage
controller.homepage = (req, res) => {
    res.render('homepage');
};


// register
controller.registerPage = (req, res) => {
    res.render('register-page');
};

controller.registerUser = (req, res) => {
    const newUser = req.body;


    req.getConnection((err, conn) => {
        conn.query('INSERT INTO users SET ?', [newUser], (err, rows) => {
            console.log(newUser);

        });

        conn.query("SELECT id FROM users WHERE first_name = '' OR last_name = '' OR mail = '' OR password = ''", [], (err, id) => {
            console.log(id);
            if (id[0] == undefined) {
                res.redirect('/login');
            } else {
                var idUserNull = id[0];
                conn.query('DELETE FROM users WHERE id = ?', [idUserNull.id], (err, rows) => {
                    res.redirect('/register');
                })
            }
        });
    })
};


// login
controller.loginPage = (req, res) => {

    res.render('login-page');
};

controller.loginUser = (req, res) => {

    const credentials = req.body;
    const { mail, password } = req.body;

    req.getConnection((err, conn) => {
        conn.query('SELECT mail, password FROM users WHERE mail = ? AND password = ?', [credentials.mail, credentials.password], (err, user) => {
            console.log(user[0]);
            if (user[0] == undefined) {
                // console.error;
                res.redirect('/login');
            } else {
                res.redirect('/account');
            }
            
        })
    });

};

// account
controller.accountPage = async (req, res) => {
    res.render('accountPage');
    // await sleep(3000);
    // await res.redirect('/api');
};


module.exports = controller;