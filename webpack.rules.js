"use strict";

var rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader'
  }
];

module.exports = rules;
