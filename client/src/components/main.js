'use strict';
import React from 'react';
import Router from 'react-router';

import ClientApp from './client_app'
import InputFinder from './input_finder'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var rootInstance = null;
let routes = (
  <Route handler={ClientApp}>
    <Route name="new_book" path="new_book" handler={InputFinder}/>
  </Route>
);

$(document).ready(function(){
  Router.run(routes, function (Handler) {
   rootInstance = React.render(<Handler/>, document.getElementById("react-content"));
  });
});
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}


module.exports = Router
