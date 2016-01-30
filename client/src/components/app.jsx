var Router = require('react-router');
var BasicTable = require('./tables/basic_table')
var BookForm = require('./book_form/book_form')
var NavigationPanel = require('./navigation/navigation_panel')
var Link = Router.Link;
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchBooksIfNeeded } from '../actions/book'
import { searchBook } from '../actions/search_book'
import { fetchData as fetcher }  from '../lib/fetcher'
import Thumbnails from './thumbnails'
import SearchBar from './search_bar'

class App extends Component {
  contextTypes: {
    router: React.PropTypes.func
  }
  constructor(props) {
    super(props)
    this.loadAdditional = this.loadAdditional.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    let firstPage = 1
    dispatch(fetchBooksIfNeeded(fetcher, firstPage))
  }

  handleSearchClick(form){
    const { dispatch } = this.props
    if(form.searchTerm.length > 0) {
      this.props.searchingBooks.searchTerm = ""
      this.props.searchingBooks.items = []
      dispatch(searchBook(form.searchTerm))
    } else {
      let firstPage = 1
      this.props.searchingBooks.searchTerm = ""
      this.props.searchingBooks.items = []
      this.props.fetchedBooks.items = []
      this.props.fetchedBooks.didInvalidate = true
      dispatch(fetchBooksIfNeeded(fetcher, firstPage))
    }
  }

  loadAdditional(page) {
    const { dispatch } = this.props
    if(this.props.searchingBooks.searchTerm.length > 0) {
      dispatch(searchBook(this.props.searchingBooks.searchTerm, page))
    } else {
      dispatch(fetchBooksIfNeeded(fetcher, page))
    }
  }

  getBookContainer(books, loading, page, hasMoreItems, key) {
    return (
      <div className="container container-xs-height">
        <div style={{ opacity: loading ? 0.5 : 1 }}>
          <SearchBar submitSearch={this.handleSearchClick}/>
          <Thumbnails key={key} hasMoreItems={hasMoreItems} loadAdditional={this.loadAdditional} page={page} books={books} />
        </div>
      </div>
    )
  }

  renderBooks(){
    if(this.props.searchingBooks.searchTerm.length > 0) {
      const { items, isSearching, page, hasMoreItems } = this.props.searchingBooks
      return this.getBookContainer(items, isSearching, page, hasMoreItems, "search")
    }
    if(this.props.fetchedBooks.items.length > 0) {
      const { items, isFetching, page, hasMoreItems } = this.props.fetchedBooks
      return this.getBookContainer(items, isFetching, page, hasMoreItems, "fetch")
    }
  }

  render() {
    return (
      <div>
        <NavigationPanel />
        {this.renderBooks()}
      </div>
    );
  }
};

App.propTypes = {
  fetchedBooks: PropTypes.object.isRequired,
  searchingBooks: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  var fetchedBooks = state.books
  var searchingBooks = state.searchBook

  return {
    fetchedBooks,
    searchingBooks
  }
}

export default connect(mapStateToProps)(App)
