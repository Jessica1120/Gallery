var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res) {
    console.log('in index route');
    res.sendFile(path.resolve('./public/views/index.html'));

});

module.exports = router;