var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var BS_DIR = path.resolve(__dirname, 'src/client/submodules/bootstrap');

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
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx?$/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(BS_DIR, 'dist/css/'),
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                include: APP_DIR,
                exclude: path.resolve(APP_DIR, 'submodules/'),
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    node: {
        fs: "empty"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
    // resolveLoader: {
    //     root: path.resolve(__dirname, 'node_modules')
    // }
};

module.exports = config;
