import React from 'react';
import { Link, History } from 'react-router';

var getURLParameter = function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

const RouteLink = React.createClass({
  mixins:[History],

  getDefaultProps() {
    return {
      refresh: false
    }
  },
  getPropTypes() {
    return {
      // for refresh page, the whole page reload.
      refresh: React.PropTypes.bool,
      // cutomized regex match to test if current RouteLink is `active` state.
      match: React.PropTypes.string
    };
  },

  handLinkClick (e) {
    if (this.props.refresh === true) {
      window.location.href = e.target.href;
    }
  },

  render () {
    // Note there is an bug in ie <=11, this.history is undefined.
    // the mixin has some problem in windows <IE10 use ES5 instead.
    let { to, match } = this.props;
    let isActive;
    let currentURL = window.location.href;
    let currentHash = currentURL.replace(getURLParameter(), '/');


    isActive = this.history.isActive(to, this.props.query);


    let className = isActive ? 'active' : '';
    return (
      <li className={className}><Link onClick={this.handLinkClick} {...this.props} activeClassName={null} /></li>
    );
  }
});

module.exports = RouteLink;
