var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var RouteHandler = Router.RouteHandler

var Link = Router.Link;
var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li></li>
          </ul>
          Hi stupid people
        </header>

        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});
module.exports = App
