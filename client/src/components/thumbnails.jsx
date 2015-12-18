import React, { Component, PropTypes } from 'react'
import Thumbnail from './thumbnail'
require("babel-polyfill");
import { InfiniteScroll } from "../lib/infinite_scroll";

class Thumbnails extends Component {
  constructor(props){
    super(props)
  }

  getThumbs(books){
    var bookThumbs = []
    for (var book of books) {
      bookThumbs.push(<Thumbnail key={book.title} book={book} />)
    }
    return React.DOM.div({className:"row row-eq-height"},bookThumbs
    )
  }

  formateRows(){
    var books = []
    var i,j,temparray,chunk = 3;
    for (i=0,j=this.props.books.length; i<j; i+=chunk) {
      temparray = this.props.books.slice(i,i+chunk);
      books.push(this.getThumbs(temparray))
    }
    return books
  }

  render() {
    return (
      <div>
        {this.formateRows()}
      </div>
    )
  }
}

export default InfiniteScroll(Thumbnails);
