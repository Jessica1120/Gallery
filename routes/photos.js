var express = require('express');
var router = express.Router();


var photos = [
    {image: './images/Boodle.jpg', caption: 'Gruffles', yesses: 0, comment: []}, 
    {image: './images/Ladyfingers.jpg', caption: '#teamladyref in NOLA', yesses: 0, comment: []},
    {image: './images/Flag.jpg', caption: 'Art by Dad', yesses: 0, comment: []}, 
    {image: './images/Dogs.jpg', caption: 'Mollie and Marla', yesses: 0, comment: []}
];

router.get('/', function(req, res) {
    console.log('get photos');
    res.send(photos);
});

router.put('/', function (req, res) {
    console.log('put logs', req.body);
    photos[req.body.index].yesses++
    res.sendStatus(202);
});

router.post('/', function (req, res) {
    console.log('put logs', req.body.comment, req.body.index);
    photos[req.body.index].comment.push(req.body.comment);
    res.sendStatus(202);
});
module.exports = router;


