'use strict';

var path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec/test.webpack.js',
    ],
    preprocessors: {
      'spec/test.webpack.js': ['webpack'],
    },
    webpack: require('./webpack.karma.config.js'),
    webpackServer: {
      quiet: true,
      stats: true
    },
    exclude: [],
    port: 8080,
    plugins: [
      require('rewire-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs2-launcher'),
      require("karma-webpack")
    ],
    browsers: ['PhantomJS2'],
    reporters: ['dots'],
    captureTimeout: 60000,
    singleRun: true
  });
};
