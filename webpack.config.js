const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist/');
const APP_DIR = path.resolve(__dirname, 'src/client/app');
const BS_DIR = path.resolve(__dirname, 'src/client/submodules/bootstrap');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: path.resolve(BS_DIR, 'dist/css/'),
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        exclude: path.resolve(APP_DIR, 'submodules/'),
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  // resolveLoader: {
  //     root: path.resolve(__dirname, 'node_modules')
  // }
};

module.exports = config;
