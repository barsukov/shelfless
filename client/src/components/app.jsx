var Router = require('react-router');
var BasicTable = require('./tables/basic_table')
var BookForm = require('./book_form/book_form')
var NavigationPanel = require('./navigation/navigation_panel')
var Link = Router.Link;
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchBooksIfNeeded, clearFetchResult } from '../actions/book'
import { searchBook, clearSearchResult} from '../actions/search_book'
import { fetchData as fetcher }  from '../lib/fetcher'

class App extends Component {
  contextTypes: {
    router: React.PropTypes.func
  }

  render() {
    return (
      <div>
        <NavigationPanel />
        {this.props.children} 
      </div>
    );
  }
};

export default connect((state) => state)(App)
