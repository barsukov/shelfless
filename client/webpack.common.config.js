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
      'select-less': nodeDir +'/react-select/less/default.less',
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
    loaders: [],
    preLoaders: []
  }
};
