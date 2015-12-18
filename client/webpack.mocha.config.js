var nodeDir = __dirname + '/node_modules';
var webpack = require('webpack')
var RewirePlugin = require("rewire-webpack");
const config = require('./webpack.common.config');
var webpack = require('webpack')
config.output = {
  filename: 'bundle.js',
  path: 'spec/dist'
};
// You can add entry points specific to rails here
config.entry.push('./spec/test_entry');
config.plugins.push(new webpack.ProvidePlugin({
  'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
  "React": 'react',
  "$": 'jquery'
}))
config.module.noParse.push(/node_modules\/sinon/);

config.module.loaders.push(
  {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' },
  {test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
);
module.exports = config;
