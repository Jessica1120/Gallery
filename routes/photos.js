var router = require('express').Router();
var photos = [{image: './images/Boodle.jpg', caption: 'Gruffles'}, {image: './images/Ladyfingers.jpg', caption: '#teamladyref in NOLA'}, {image: './images/Flag.jpg', caption: 'Art by Dad'}, {image: './images/Dogs.jpg', caption: 'Mollie and Marla'}];

router.get('/', function(req, res) {
    console.log('get photos');
    res.send(photos);
});


module.exports = router;


