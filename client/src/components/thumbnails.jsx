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

  getThumbs(items, id){
    var bookThumbs = []
    for (var book of items) {
      let requested = this.props.requestedBooks.includes(book.id)
      bookThumbs.push(<Thumbnail requested={requested} requestBook={this.requestBook} key={book.id} book={book} />)
    }
    return React.DOM.div({className:"row row-eq-height", key: id}, bookThumbs)
  }

  formateRows(){
    var items = []
    var i,j,temparray,chunk = 3;
    if(this.props.items.length <= chunk)
    {
      items.push(this.getThumbs(this.props.items))
      return items
    }
    for (i=0,j=this.props.items.length; i<j; i+=chunk) {
      temparray = this.props.items.slice(i,i+chunk);
      items.push(this.getThumbs(temparray, i))
    }
    return items
  }

  render() {
    return (
        <div className="thumbnails-scrollable">
          <div style={{ opacity: this.props.loading ? 0.5 : 1 }}>
            {this.props.isLoading && this.props.items.length === 0 &&
             <h2>Loading...</h2>
            }
            {!this.props.isLoading && this.props.items.length === 0 &&
              <h2>Empty.</h2>
            }
            { this.props.items.length > 0 &&
              this.formateRows()
            }
          </div>
        </div>
    )
  }
}

Thumbnails.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function getCurrentMainItemState(state){
  if(state.searchedBooks.searchTerm.length > 0) {
    return state.searchedBooks
  }
  return state.fetchedBooks
}

function mapStateToProps(state) {
  var mainState = getCurrentMainItemState(state)
  var items = mainState.items
  var page = mainState.page
  var hasMoreItems = mainState.hasMoreItems
  var loading = mainState.isLoading
  var bookState = state.requestBook.status
  var isRequesting = state.requestBook.isRequesting
  var requestedBooks = state.requestBook.requestedBooks
  return {
    bookState,
    isRequesting,
    requestedBooks,
    items,
    page,
    hasMoreItems
  }
}

export default connect(mapStateToProps, null, null, {withRef: true})(InfiniteScroll(Thumbnails));
