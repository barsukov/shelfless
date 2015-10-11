var React = require('react')
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var NavigationLink= React.createClass({
  render() {
    return (
      <li key={this.props.name}>
        <Link to={this.props.path}>
          {this.props.name}
        </Link>
      </li>
    );
  }
});
module.exports = NavigationLink
