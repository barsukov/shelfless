'use strict';
var React = require('react');
var Router = require('react-router');
import { createStore } from 'redux';
import { Provider } from 'react-redux';
var App = require('./app');
var BookListHandler = require('./book_list_handler');
let reducer = require('../reducers/add_table_item')
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var rootInstance = null;

var routes = (
  <Route name="app" path="/new_interface" handler={App}>
    <Route path="/books_list" handler={BookListHandler}/>
    <Route path="/accounts/:id/">
      <Route path="my_books"/>
      <Route path="reader_book_requests"/>
      <Route path="holder_book_requests"/>
   </Route>
   <Route path="login"/>
  </Route>
);
function newMainStart(){
  $(document).ready(function(){
    Router.run(routes, Router.HistoryLocation, function (Root) {
      let store = createStore(reducer);
      rootInstance = React.render(
          <Provider store={store}>
            {() => <Root />}
          </Provider>,
          document.getElementById('react-content')
        )
    });
  })
}

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
module.exports = newMainStart
