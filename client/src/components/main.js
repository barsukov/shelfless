'use strict';
var React = require('react')
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var App = require('./app')
var rootInstance = null;

var routes = (
  <Route name="app" path="/new_interface" handler={App}>
    <Route path="books"/>
    <Route path="/accounts/:id/">
      <Route path="my_books"/>
      <Route path="reader_book_requests"/>
      <Route path="holder_book_requests"/>
   </Route>
   <Route path="login"/>
  </Route>
);

$(document).ready(function(){
  Router.run(routes, Router.HistoryLocation, function (Root) {
    rootInstance = React.render(<Root />, document.getElementById('react-content'))
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
