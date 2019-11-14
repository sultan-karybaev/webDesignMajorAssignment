var express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
var router = express.Router();
let asd = 'asd';
/* GET users listing. */
router.post('/', function(req, res, next) {
    //res.send('respond with a resource');
    console.log('form form', req.body);
    asd = req.body['qwe'];
    //res.render('form', { title: req.body['qwe']});
    res.sendStatus(200);
});

router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    console.log('form form');
    res.render('form', { title: asd});
});

router.post('/file', function(req, res, next) {
    console.log('REST test', req.body, req.headers);
    const form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function(name, file) {
        console.log('fileBegin');
        //file.path = __dirname + '/static/' + file.name
        file.path = path.join(__dirname, file.name);
    });
    form.on('file', function(name, file) {
        console.log('file', file);

    });
    res.send('qwerty');
});

module.exports = router;