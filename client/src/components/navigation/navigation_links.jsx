import React from 'react'
import NavigationLink from './navigation_link'
import Link from 'react-router'
var NavigationLinks = React.createClass({
  linkObjs: [
    { name: "My books", path: `/my_books`},
    { name: "Reading list", path:`/reader_book_requests`},
    { name: "Incoming request", path: `/holder_book_requests`}
  ],
  getNavigationLinks(accountId) {
    var navigationLinks = [];
    var rootPath = `/new_interface/accounts/${accountId}`;
    navigationLinks.push(<NavigationLink name={"Books"} path={"/books"} />)
    this.linkObjs.map(link => {
      navigationLinks.push(<NavigationLink key={link.name} name={link.name} path={rootPath + link.path} />)
    })
    return navigationLinks
  },
  render() {
    return (
      <ul className="nav navbar-nav">
        {
          this.getNavigationLinks(this.props.accountId)
        }
      </ul>
    );
  }
});
module.exports = NavigationLinks
