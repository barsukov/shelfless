'use strict';
var React = require('react')
var Router = require('./router')
var App = require('./app')
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

require('../styles/select.less');
var rootInstance = null;
let ReaderRequest = require('./reader_request/reader_request')

var routes = (
  <Route name="app" path="/books" handler={App}>
  </Route>
);

$(document).ready(function(){
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    rootInstance = React.render(<App />, document.getElementById('react-content'))
  });
})

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
