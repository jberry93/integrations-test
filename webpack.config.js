'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './app/src/app.js',
  output: {
    filename: 'bundle.js',
    path: '/app/dist/'
  },
  devServer: {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    port: 9000
  }
};

module.exports = config;
