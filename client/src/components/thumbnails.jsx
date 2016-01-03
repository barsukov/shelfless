import React, { Component, PropTypes } from 'react'
import Thumbnail from './thumbnail'
import { InfiniteScroll } from "../lib/infinite_scroll"
import css from '../styles/thumbnails.css';

class Thumbnails extends Component {
  constructor(props){
    super(props)
  }

  getThumbs(books, id){
    var bookThumbs = []
    for (var book of books) {
      bookThumbs.push(<Thumbnail key={book.id} book={book} />)
    }
    return React.DOM.div({className:"row row-eq-height", key: id}, bookThumbs)
  }

  formateRows(){
    var books = []
    var i,j,temparray,chunk = 3;
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

export default InfiniteScroll(Thumbnails);
