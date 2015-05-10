'use strict';
var React = require('react')
var Router = require('./router')
var Backbone = require('backbone')
require('../styles/select.less');
$(document).ready(function(){
  new Router();
  Backbone.history.start();
});
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
