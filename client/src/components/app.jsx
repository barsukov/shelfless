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
    const { dispatch, page } = this.props
    dispatch(fetchBooksIfNeeded(fetcher, page))
  }

  handleSearchClick(form){
    const { dispatch } = this.props
    dispatch(searchBook(form.searchTerm))
  }

  loadAdditional(page){
    const { dispatch } = this.props
    dispatch(fetchBooksIfNeeded(fetcher, page))
  }

  getBookContainer(books, loading, page) {
    return (
      <div className="container container-xs-height">
        <div style={{ opacity: loading ? 0.5 : 1 }}>
            <SearchBar submitSearch={this.handleSearchClick}/>
            <Thumbnails loadAdditional={this.loadAdditional} page={page} books={books} />
        </div>
      </div>
    )
  }

  renderBooks(){
    if(!this.props.isSearching && this.props.searchedBooks.length > 0) {
      return this.getBookContainer(this.props.searchedBooks, this.props.isSearching)
    }
    if(this.props.books.length > 0) {
      return this.getBookContainer(this.props.books, this.props.isFetching, this.props.page)
    }
  }


  render() {
    const { books, isFetching, isSearching, page } = this.props
    return (
      <div>
        <NavigationPanel />
        {isFetching && books.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && books.length === 0 &&
          <h2>Empty.</h2>
        }
        {this.renderBooks()}
        </div>
    );
  }
};

App.propTypes = {
  books: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isSearching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  var books = state.books.items || []
  var searchedBooks = state.searchBook.books || []
  var isSearching = state.searchBook.isSearching
  var page = state.books.page
  var isFetching = state.books.isFetching
  return {
    page,
    books,
    isFetching,
    searchedBooks,
    isSearching
  }
}

export default connect(mapStateToProps)(App)
