const path = require('path');
const nodeDir = path.join(__dirname, 'node_modules');
var webpack = require('webpack')
module.exports = {

  // the project dir
  context: __dirname,
  entry: ['./src/components/main'],

  // In case you wanted to load jQuery from the CDN, this is how you would do it:
  // externals: {
  //   jquery: 'var jQuery'
  // },
  resolve: {
    alias: {
      'react': nodeDir + '/react/',
      'jquery': nodeDir +'/jquery/dist/jquery.min.js',
      'selectize': nodeDir +'/selectize/dist/js/selectize.min.js',
      'selectize-css': nodeDir +'/selectize/dist/css/selectize.bootstrap3.css',
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.css', 'config.js'],
    modulesDirectories: ["client", "node_modules"]
  },
  plugins: [
  ],
  module: {
    noParse: [
      nodeDir +'/jquery/dist/jquery.min.js'
    ],
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      }
     ],
    preLoaders: []
  }
};
