'use strict';
import React from 'react'
require("../../assets/css/bootstrap_and_overrides.css.less")
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from '../store/book'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './app'
import BookList from './book_list'
var rootInstance = null;

var routes = (
  <Route path="/single_page_application" component={App} >
    <Route path="books" component={BookList}/>
    <Route path="/accounts/:id/">
      <Route path="books"/>
      <Route path="reader_book_requests"/>
      <Route path="holder_book_requests"/>
   </Route>
   <Route path="login"/>
  </Route>
);

$(document).ready(function(){
  ReactDOM.render(
      <Provider store={configureStore()}>
        {
          <Router history={createBrowserHistory()}>
            {routes}
          </Router>
        }
      </Provider>,
      document.getElementById('react-content')
  );
})

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
