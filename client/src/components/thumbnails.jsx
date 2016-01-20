import React, { Component, PropTypes } from 'react'
import Thumbnail from './thumbnail'
import { InfiniteScroll } from "../lib/infinite_scroll"
import css from '../styles/thumbnails.css';
import { requestBook } from "../actions/request_book"
import requester from "../lib/book_requester"
import { connect } from 'react-redux'

class Thumbnails extends Component {
  constructor(props){
    super(props)
    this.requestBook = this.requestBook.bind(this)
  }

  requestBook(book){
    this.props.dispatch(requestBook(requester, book))
  }

  getThumbs(books, id){
    var bookThumbs = []
    for (var book of books) {
      let requested = this.props.requestedBooks.includes(book.id)
      bookThumbs.push(<Thumbnail requested={requested} requestBook={this.requestBook} key={book.id} book={book} />)
    }
    return React.DOM.div({className:"row row-eq-height", key: id}, bookThumbs)
  }

  formateRows(){
    var books = []
    var i,j,temparray,chunk = 3;
    if(this.props.books.length <= chunk)
    {
      books.push(this.getThumbs(this.props.books))
      return books
    }
    for (i=0,j=this.props.books.length; i<j; i+=chunk) {
      temparray = this.props.books.slice(i,i+chunk);
      books.push(this.getThumbs(temparray, i))
    }
    return books
  }

  render() {
    return (
      <div className="thumbnails-scrollable">
        {this.formateRows()}
      </div>
    )
  }
}

Thumbnails.propTypes = {
  books: PropTypes.array.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  var bookState = state.requestBook.status
  var isRequesting = state.requestBook.isRequesting
  var requestedBooks = state.requestBook.requestedBooks
  return {
    bookState,
    isRequesting,
    requestedBooks
  }
}

export default connect(mapStateToProps)(InfiniteScroll(Thumbnails));
