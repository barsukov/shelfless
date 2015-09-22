var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var RouteHandler = Router.RouteHandler
var NavigationPanel = require('./navigation/navigation_panel')
var BasicTable = require('./tables/basic_table')
var BookListHandler = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="page-header">
            <h2>Book list</h2>
          </div>
          <BasicTable />
        </div>
      </div>
    );
  }
});
module.exports = BookListHandler
