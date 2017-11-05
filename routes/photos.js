var express = require('express');
var router = express.Router();


var rowOne = [
        {image: './images/Boodle.jpg', caption: 'Gruffles', yesses: 0, comment: []}, 
        {image: './images/Molly.jpg', caption: 'Molly', yesses: 0, comment: []},
        {image: './images/Flag.jpg', caption: 'Art by Dad', yesses: 0, comment: []}, 
        {image: './images/Dogs.jpg', caption: 'Mollie and Marla', yesses: 0, comment: []} 
        ];
var rowTwo = [
        {image: './images/besties.jpg', caption: 'D.O.C. and Honey Vice - photo by Wijadi Jodi', yesses: 0, comment: []},
        {image: './images/think.jpg', caption: 'Think That You Might Be Wrong', yesses: 0, comment: []},
        {image: './images/nolabrewing.jpg', caption: '#teamladyref at Nola Brewing, 2017', yesses: 0, comment: []},
        {image: './images/nola.jpg', caption: 'Metarie Cemetery, 2015', yesses: 0, comment: []},
        ]

        var photos = {rowOne, rowTwo}

    
    


router.get('/', function(req, res) {
    console.log('get photos');
    res.send(photos);
});

router.put('/rowOne', function (req, res) {
    console.log('put logs', req.body);
    photos.rowOne[req.body.index].yesses++
    res.sendStatus(202);
});

router.put('/rowTwo', function (req, res) {
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


