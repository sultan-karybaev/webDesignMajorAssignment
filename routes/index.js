var express = require('express');
var router = express.Router();
const MyModel = require('../models/BlogPost.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    MyModel.find({}, function (err, docs) {
        // docs.forEach
        console.log('docs', docs);
        res.render('index', { title: 'Express', data: docs });
        //docs.rem
    });

});

router.post('/remove', function(req, res, next) {
    console.log('remove', req.body);
    const postId = req.body['postId'];
    MyModel.findById(postId, (err, doc) => {
        console.log('remove docs', doc);
        doc.remove(function (err) {
            if (err) { console.log('Error in remove', err); }
            console.log('Model is removed');
            res.sendStatus(200)
        })
    });

});

router.get('/test', function(req, res, next) {
    console.log('REST test');
    res.send('qwerty');
});

module.exports = router;
