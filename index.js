var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var UserController = require('./controllers/user');

var app = new express();
app.use(bodyParser.json());
mongoose.connect('mongodb://dm:dm@127.0.0.1/calcDB');

app.get('/users', UserController.findAll);
app.get('/user/name/:name', UserController.findByName);

app.listen(8080, function() {
    console.log('Listening...'.yellow);
});

console.log('Started...'.green);