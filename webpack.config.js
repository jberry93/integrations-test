"use strict";

var path = require('path');
var webpack = require('webpack');
var prod = (process.env.NODE_ENV === 'production');

var config = {
  entry: {
    app: [
      './app/src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    
  ],
  devServer: {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    port: 9000
  }
};

if (prod) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
