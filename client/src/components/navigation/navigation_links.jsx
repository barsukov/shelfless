import React from 'react'
import NavigationLink from './navigation_link'
import Link from 'react-router'
import RouteLink from '../route_link'
var NavigationLinks = React.createClass({
  linkObjs: [
    { name: "My books", path: `/books`},
    { name: "Reading list", path:`/reader_book_requests`},
    { name: "Incoming requests", path: `/holder_book_requests`}
  ],

  getOldRootPath(){
    return `/accounts/${this.props.accountId}`
  },
  getNavigationLinks() {
    var navigationLinks = [];
    var rootPath = this.getOldRootPath()
    this.linkObjs.map(link => {
      navigationLinks.push(
        <RouteLink refresh={true} key={link.name} activeClassName="active" to={rootPath + link.path}>
          {link.name}
        </RouteLink>
      )
    })
    return navigationLinks
  },
  render() {
    return (
      <ul className="nav navbar-nav">
        <NavigationLink name={"Library"} path="/single_page_application/books" />
        { this.getNavigationLinks() }
      </ul>
    );
  }
});
module.exports = NavigationLinks
