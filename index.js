var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var UserController = require('./src/controllers/user');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var app = new express();
app.use(bodyParser.json());
mongoose.connect('mongodb://dm:dm@127.0.0.1/calcDB');

//app.get('/users', UserController.findAll);
//app.get('/user/name/:name', UserController.findByName);

app.listen(3000, function() {
    console.log('express Listening...'.yellow);
});

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
}).listen(8080, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }

        console.log('webpack-dev-server Listening on localhost:8080'.yellow);
    });

console.log('Started...'.green);