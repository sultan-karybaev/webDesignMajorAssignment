var express = require('express');
var router = express.Router();
const MyModel = require('../BlogPost.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    MyModel.find({}, function (err, docs) {
        // docs.forEach
        console.log('docs', docs);
        res.render('index', { title: 'Express', data: docs });
        //docs.rem
    });

});

router.get('/test', function(req, res, next) {
    console.log('REST test');
    res.send('qwerty');
});

module.exports = router;
