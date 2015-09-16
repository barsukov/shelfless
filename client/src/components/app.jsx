var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var RouteHandler = Router.RouteHandler
var NavigationPanel = require('./navigation/navigation_panel')

var Link = Router.Link;
var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
      <div>
        <NavigationPanel />
        <RouteHandler/>
      </div>
    );
  }
});
module.exports = App
