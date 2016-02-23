// Run like this:
// cd client && node server.js

const path = require('path');
const config = require('./webpack.common.config');
const webpack = require('webpack');

// We're using the bootstrap-sass loader.
// See: https://github.com/justin808/bootstrap-sass-loader
config.entry.push('webpack-dev-server/client?http://localhost:8080',
   'webpack/hot/only-dev-server','./src/components/single_page_main')

config.output = {
  // this file is served directly by webpack
  path: __dirname,
  filename: 'client-bundle.js',
  publicPath: 'http://localhost:8080/' // Required for webpack-dev-server
};

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.ProvidePlugin({
  'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
  "React": 'react',
  "JQuery": 'jquery',
  "$": 'jquery'
}))

config.devtool = 'eval-source-map';

// All the styling loaders only apply to hot-reload, not rails
config.module.loaders.push(
  {test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
  {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
  {
    test: /\.scss$/,
    loader: 'style!css!sass?outputStyle=expanded&imagePath=/assets/images&includePaths[]=' +
    path.resolve(__dirname, './styles/')
  }
)

module.exports = config;
