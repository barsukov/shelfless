var Router = require('react-router'); // or var Router = ReactRouter; in browsers

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
let ReaderRequest = require('./reader_request/reader_request')
var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">App</Link></li>
          </ul>
          Logged in as Jane
        </header>

        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});
module.exports = App
