var React = require('react')
import NavigationLinks from './navigation_links'
import NavigationLink from './navigation_link'
import RouteLink from '../route_link'
import { getCoockieByName } from '../../lib/coockies'

var NavigationPanel = React.createClass({
  getSettingsPath(){
    let accountId = getCoockieByName("account_id")
    return `/accounts/${accountId}`
  },
  render() {
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
            <NavigationLinks accountId={getCoockieByName("account_id")} />
            <ul className="nav navbar-nav pull-right">
              <RouteLink refresh={true} activeClassName="active" to={this.getSettingsPath()}>Settings</RouteLink>
              <RouteLink refresh={true} activeClassName="active" to="/users/sign_out">Sign out</RouteLink>
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = NavigationPanel
