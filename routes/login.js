var express = require('express');
var body = require('body-parser');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login', {
    loginHeader: 'Login',
    css: ['stylesheets/loginStyle.css']});
});

router.post('/attemptLogin', function (req, res, next) {
    var userName = req.body.userName;
    var password = req.body.password;
    var loginSuccess = userLogin(userName, password);
    res.redirect('index');
    // if (loginSuccess) {
    //     res.redirect('index');
    // }
    // res.redirect('/')
});

function userLogin(userName, password) {
    var loginSuccess = false;
    if (userName && password) {
        if (userName == 'brandon' && password == 'pw') {
            loginSuccess = true;
        }
    }
    return loginSuccess;
};

module.exports = router;
