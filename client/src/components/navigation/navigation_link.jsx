var React = require('react')
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var NavigationLink= React.createClass({
  render() {
    return (
      <li key={this.props.name}>
        <Link key={this.props.name} to={this.props.path}>
          {this.props.name}
        </Link>
      </li>
    );
  }
});
module.exports = NavigationLink
