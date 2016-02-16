const path = require('path');
const nodeDir = path.join(__dirname, 'node_modules');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {

  // the project dir
  context: __dirname,
  entry: ['./src/components/main'],
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  // In case you wanted to load jQuery from the CDN, this is how you would do it:
  // externals: {
  //   jquery: 'var jQuery'
  // },
  resolve: {
    alias: {
      'react': nodeDir + '/react/',
      'fetch': nodeDir + '/whatwg-fetch/',
      'jquery': nodeDir +'/jquery/dist/jquery.min.js',
      'selectize': __dirname + '/selectize/selectize.min.js',
      'selectize-css': __dirname  +'/selectize/selectize.bootstrap3.css',
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css', 'config.js'],
    modulesDirectories: ["client", "node_modules"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'index.ejs',
      inject: 'head'
      }
    )
  ],
  module: {
    noParse: [
      __dirname + '/selectize/selectize.min.js',
      __dirname  +'/selectize/selectize.bootstrap3.css',
      nodeDir +'/jquery/dist/jquery.min.js'
    ],
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      }
     ],
    preLoaders: []
  }
};
