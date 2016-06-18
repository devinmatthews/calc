var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = new express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('yay');
});

app.listen(8080, function() {
    console.log('Listening...'.yellow);
});

console.log('Started...'.green);