var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var React = require('react')
var RouteHandler = Router.RouteHandler
var NavigationPanel = require('./navigation/navigation_panel.jsx')
var BookList = React.createClass({
  render: function () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="page-header">
              <h2>Book list</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = BookList
