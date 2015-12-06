const config = require('./webpack.common.config');
var webpack = require('webpack')
config.output = {
  filename: 'client-bundle.js',
  path: '../app/assets/javascripts/'
};

// load jQuery from cdn or rails asset pipeline
config.externals = {jquery: 'var jQuery'};

// You can add entry points specific to rails here
config.entry.push('./src/components/main');
config.plugins.push(new webpack.ProvidePlugin({
  'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
  "React": 'react',
  "$": 'jquery'
}))
config.module.loaders.push(
  {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' },
  {test: /\.js$/, exclude: /node_modules/, loader: 'babel' },

  // Next 2 lines expose jQuery and $ to any JavaScript files loaded after client-bundle.js
  // in the Rails Asset Pipeline. Thus, load this one prior.
  {test: require.resolve('jquery'), loader: 'expose?jQuery'},
  {test: require.resolve('jquery'), loader: 'expose?$'}
);
module.exports = config;

// Next line is Heroku specific. You'll have BUILDPACK_URL defined for your Heroku install.
const devBuild = (typeof process.env.BUILDPACK_URL) === 'undefined';
if (devBuild) {
  console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map';
} else {
  console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
