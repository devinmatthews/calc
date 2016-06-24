var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src')},
            {test: /\.(png)$/, loader: 'url-loader?limit=100000'}
        ]
    }
};
