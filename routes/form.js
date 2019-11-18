var express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
var router = express.Router();
let id = '';
let title = '';
let description = '';
const BlogPost = require('../models/BlogPost.js');
/* GET users listing. */
router.post('/', function(req, res, next) {
    //res.send('respond with a resource');
    console.log('form form', req.body);
    id = req.body['id'];
    title = req.body['title'];
    description = req.body['description'];
    //res.render('form', { title: req.body['qwe']});
    res.sendStatus(200);
});

router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    console.log('form form');
    res.render('form', { id: id, title: title, description: description});
    id = '';
    title = '';
    description = '';
});

router.post('/file', function(req, res, next) {
    console.log('REST test', req.body,);
    const form = new formidable.IncomingForm();
    form.parse(req);
    let title = '';
    let description = '';
    let image = '';
    let isEditing = false;
    let id = '';
    form.on('field', function(name, value) {
        console.log('field', name, value);
        if (name === 'title') {
            title = value;
        }
        if (name === 'description') {
            description = value;
        }
        if (name === 'id') {
            id = value;
        }
        if (name === 'isEditing') {
            isEditing = (value === 'true');

            console.log('isEditing', typeof isEditing);
        }
    });
    form.on('fileBegin', function(name, file) {
        console.log('fileBegin');
        file.path = __dirname + '/../public/images/' + file.name;
        image = file.name;
        //file.path = path.join(__dirname, file.name);
    });
    form.on('file', function(name, file) {
        //console.log('file', file);

    });
    form.on('end', function(name, file) {
        //console.log('qwerty');
        if (isEditing) {
            BlogPost.findById(id, (err, doc) => {
                doc.title = title;
                doc.body = description;
                if (image) { doc.image = image; }
                doc.save(function (err) {
                    if (err) { console.log('Error in save', err); }
                    console.log('Model is saved');
                });
            });
        } else {
            let blogPost = new BlogPost();
            blogPost.title = title;
            blogPost.body = description;
            blogPost.image = image;
            blogPost.save(function (err) {
                if (err) { console.log('Error in save', err); }
                console.log('Model is saved');
            });
        }

    });

    res.send('qwerty');
});

module.exports = router;