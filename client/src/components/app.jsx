var Router = require('react-router');
var BasicTable = require('./tables/basic_table')
var BookForm = require('./book_form/book_form')
var NavigationPanel = require('./navigation/navigation_panel')
var Link = Router.Link;
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchBooksIfNeeded } from '../actions/book'
import { selectBook } from '../actions/select_book'
import fetcher from '../lib/fetcher'

class App extends Component {
  contextTypes: {
    router: React.PropTypes.func
  }
  constructor(props) {
    super(props)
    this.handleBookClick = this.handleBookClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBooksIfNeeded(fetcher))
  }

  handleBookClick(book){
    const { dispatch } = this.props
    dispatch(selectBook(book))
  }

  render() {
    const { books, isFetching } = this.props
    return (
      <div>
        <NavigationPanel />
        {isFetching && books.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && books.length === 0 &&
          <h2>Empty.</h2>
        }
        {books.length > 0 &&
          <div className="container">
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <div className="page-header">
                <h2>Books</h2>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <BasicTable books={books} handleBookClick={this.handleBookClick} />
                </div>
                <div className="col-md-4">
                  <BookForm book={this.props.book} />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
};

App.propTypes = {
  books: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  var books = state.books.items || []
  var book = state.selectedBook.book
  var isFetching = state.books.isFetching
  return {
    book,
    books,
    isFetching
  }
}

export default connect(mapStateToProps)(App)