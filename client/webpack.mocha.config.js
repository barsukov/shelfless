var nodeDir = __dirname + '/node_modules';
var webpack = require('webpack')
var RewirePlugin = require("rewire-webpack");
module.exports = {
  context: __dirname,
  output: 'spec/dist/s.js',
  entry: "./spec/test_entry",
  resolve: {
    alias: {
      'react': nodeDir +'/react/',
      'underscore': nodeDir +'/underscore/underscore-min.js',
      'jquery': nodeDir +'/jquery/dist/jquery.js'
    },
    extensions: ["", ".jsx", ".cjsx", ".coffee", ".js"],
    modulesDirectories: ["js", "node_modules"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new RewirePlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      "_": "underscore",
      "React": 'react',
      "$": "jquery",
      "moment": "moment"
    })
  ],

  module: {
    noParse: [
       /node_modules\/sinon/,
    ],
    loaders: [
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' },
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
