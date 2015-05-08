'use strict';
import React from 'react';
import Router from 'react-router';

import ClientApp from './client_app'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let routes = (
  <Route handler={ClientApp}>
    <Route name="/" handler={ClientApp}/>
  </Route>
);
$(document).ready(function(){
  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("react-content"));
  });
});

module.exports = Router
