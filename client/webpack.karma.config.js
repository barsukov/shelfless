const config = require('./webpack.common.config');
var RewirePlugin = require("rewire-webpack");
var webpack = require('webpack')

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new RewirePlugin())
config.plugins.push(new webpack.ProvidePlugin({
  "React": 'react-addons',
  "$": 'jquery'
}))
config.module.preLoaders.push({
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jsxhint'
    });
config.module.loaders.push({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'react-hot!babel-loader'
  },
  {
   test: /\.jsx$/,
    exclude: /node_modules/,
    loader: 'react-hot!babel-loader'
  },
  {
    test: /\.less/,
    loader: 'style-loader!css-loader!less-loader'
  }, {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }, {
    test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=8192'
  }
);

module.exports = config;

