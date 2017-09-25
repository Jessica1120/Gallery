var router = require('express').Router();
var photos = [{image: './images/Boodle.jpg'}, {image: './images/Ladyfingers.jpg'}, {image: './images/Flag.jpg'}, {image: './images/Dogs.jpg'}];

router.get('/', function(req, res) {
    console.log('get photos');
    res.send(photos);
});


module.exports = router;


