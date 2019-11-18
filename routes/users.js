var express = require('express');
var router = express.Router();
const User = require('../models/User.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
    const email = req.body['email'];
    const password = req.body['password'];
    User.findOne({email: email}, function (err, myUser) {
        if (err) { console.log('Error in User.findOne', err); }
        console.log('myUser', myUser);
        if (myUser) {
            if (myUser.password === password) {
                res.sendStatus(200);
            } else {
                res.sendStatus(203);
            }
        } else {
            res.sendStatus(202);
        }
    })

});

router.post('/register', function(req, res, next) {
    const email = req.body['email'];
    const password = req.body['password'];
    User.findOne({email: email}, function (err, myUser) {
        if (err) { console.log('Error in User.findOne', err); }
        console.log('myUser', myUser);
        if (myUser) {
            res.sendStatus(201);
        } else {
            let user = new User();
            user.email = email;
            user.password = password;
            user.save(function (err) {
                if (err) { console.log('Error in save', err); }
                console.log('User is saved');
                res.sendStatus(200);
            });
        }
    })
});

module.exports = router;
