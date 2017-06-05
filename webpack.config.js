var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: APP_DIR,
                exclude: path.resolve(APP_DIR, 'submodules'),
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                include: APP_DIR + '/SUBMODULES/'
            }
        ]
    },
    node: {
        fs: "empty"
    }
    // resolveLoader: {
    //     root: path.resolve(__dirname, 'node_modules')
    // }
};

module.exports = config;
