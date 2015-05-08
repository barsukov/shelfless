'use strict';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

var ClientApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = ClientApp;
