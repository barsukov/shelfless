'use strict';
var path = require('path');
var webpack = require('webpack')
var nodeDir = path.join(__dirname, 'node_modules');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'spec/test_entry.js'
    ],
    preprocessors: {
      'spec/test_entry.js': ['webpack']
    },
    webpack: { //kind of a copy of your webpack config
      module: {
        loaders: [
          {
            test: /(js|jsx)?$/,
            exclude: /(node_modules)/,
            loader: "babel"
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    port: 8081,
    plugins: [
      require('rewire-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs2-launcher'),
      require("karma-webpack")
    ],
    browsers: ['PhantomJS2'],
    reporters: ['dots'],
    captureTimeout: 60000,
    singleRun: false
  });
};
