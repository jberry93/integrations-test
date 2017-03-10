'use strict';

var path = require('path');
var webpack = require('webpack');

var config = {
  entry: './app/src/app.js',
  output: {
    filename: 'bundle.js',
    path: '/app/dist/'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin
  ],
  devServer: {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    port: 9000
  }
};

module.exports = config;
