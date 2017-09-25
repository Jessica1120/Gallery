var router = require('express').Router();
var photos = [{image: '../public/images/Boodle.jpg'}];

router.get('/', function(req, res) {
    console.log('get photos');
    res.send(photos);
});


module.exports = router;


