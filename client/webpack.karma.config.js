var nodeDir = __dirname + '/node_modules';
var webpack = require('webpack')
var RewirePlugin = require("rewire-webpack");
module.exports = {
  context: __dirname,
  entry: "./spec/test.webpack",
  resolve: {
    alias: {
      'react': nodeDir +'/react/react-with-addons.js',
      'underscore': nodeDir +'/underscore/underscore-min.js',
      'jquery': nodeDir +'/jquery/jquery.js'
    },
    extensions: ["", ".jsx", ".cjsx", ".coffee", ".js"],
    modulesDirectories: ["js", "node_modules"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new RewirePlugin(),
    new webpack.ProvidePlugin({
      "_": "underscore",
      "React": 'react',
      "$": "jquery",
      "moment": "moment"
    })
  ],
  module: {
    noParse: [
      nodeDir + '/react/react-with-addons.js',
    ],
    loaders: [
      {test: /\.jsx$/, loader: ["jsx-loader", "babel"]},
      {test: /\.cjsx$/, loaders: ["coffee", "cjsx"]},
      {test: /\.coffee$/, loader: "coffee"}
    ]
  }
};
