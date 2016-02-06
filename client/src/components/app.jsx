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
import Thumbnails from './thumbnails'
import SearchBar from './search_bar'

class App extends Component {
  contextTypes: {
    router: React.PropTypes.func
  }
  constructor(props) {
    super(props)
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.loadAdditional = this.loadAdditional.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    let firstPage = 1
    dispatch(fetchBooksIfNeeded(fetcher, firstPage))
  }

  handleSearchClick(form){
    const { dispatch } = this.props
    if(form.searchTerm.length > 0) {
      dispatch(clearSearchResult())
      dispatch(clearFetchResult())
      dispatch(searchBook(form.searchTerm))
    } else {
      let firstPage = 1
      dispatch(clearSearchResult())
      dispatch(clearFetchResult())
      dispatch(fetchBooksIfNeeded(fetcher, firstPage))
    }
  }
  loadAdditional(page) {
    const { dispatch } = this.props
    if(this.props.searchedBooks.searchTerm.length > 0) {
      dispatch(searchBook(this.props.searchedBooks.searchTerm, page))
    } else {
      dispatch(fetchBooksIfNeeded(fetcher, page))
    }
  }

  render() {
    return (
      <div>
        <NavigationPanel />
        <div className="container container-xs-height">
          <SearchBar submitSearch={this.handleSearchClick}/>
          <Thumbnails loadAdditional={this.loadAdditional} />
        </div>
      </div>
    );
  }
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect((state) => state)(App)
