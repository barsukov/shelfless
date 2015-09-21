var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var RouteHandler = Router.RouteHandler
var NavigationPanel = require('./navigation/navigation_panel')
var BasicTable = require('./tables/basic_table')
var BookListHandler = React.createClass({
  render: function () {
    return (
      <div className="container">
        <BasicTable />
      </div>
    );
  }
});
module.exports = BookListHandler
