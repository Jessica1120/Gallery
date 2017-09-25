var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000

var app = express();

var indexRouter = require('./routes/index');
var photoRouter = require('./routes/photos');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/photos', photoRouter);

app.listen(port, function(){
    console.log('listening on port:', port);
});