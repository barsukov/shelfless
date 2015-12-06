var React = require('react')
import NavigationLinks from './navigation_links'
import NavigationLink from './navigation_link'
var NavigationPanel = React.createClass({

  render: function () {
    return (
      <div className="navbar navbar-default navbar-fixed-top topnav">
        <div className="container">
          <a className="navbar-brand topnav" href="">
            Shelfless
            <sub>
              &beta;
            </sub>
          </a>
          <div className="navbar-collapse collapse navbar-responsive-collapse">
            <NavigationLinks accountId={1} />
            <ul className="nav navbar-nav pull-right">
              <NavigationLink name={"Login"} path={"/login"} />
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = NavigationPanel
