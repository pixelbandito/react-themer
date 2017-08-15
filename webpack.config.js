const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src/client/app');
const BS_DIR = path.resolve(__dirname, 'src/client/submodules/bootstrap');
const BUILD_DIR = path.resolve(__dirname, 'docs/');

const config = {
  entry: {
    [`${BUILD_DIR}/bundle`]: `${APP_DIR}/index.jsx`,
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000,
  },
  devtool: 'env',
  plugins: [new HtmlWebpackPlugin({ template: 'src/client/index.html' })],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
          plugins: ['babel-plugin-transform-object-rest-spread'],
        },
      },
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
          plugins: ['babel-plugin-transform-object-rest-spread'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
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
