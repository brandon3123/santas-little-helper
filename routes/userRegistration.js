var express = require('express');
var body = require('body-parser');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('userRegistration', {css: ['stylesheets/registration.css'] });
});

// router.post('/attemptLogin', function (req, res, next) {
//     var userName = req.body.userName;
//     var password = req.body.password;
//     var loginSuccess = userLogin(userName, password);
//     res.redirect('index');
//     // if (loginSuccess) {
//     //     res.redirect('index');
//     // }
//     // res.redirect('/')
// });
//
// router.get('/userRegistration', function (req, res, next) {
//     res.render('userRegistration', {
//         loginHeader: 'Login',
//         css: ['stylesheets/loginStyle.css']});
// });

module.exports = router;
