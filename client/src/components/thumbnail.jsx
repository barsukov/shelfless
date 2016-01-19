import React, { Component, PropTypes } from 'react'
class Thumbnail extends Component {
  constructor(props){
    super(props)
    this.handleBookRequestClick = this.handleBookRequestClick.bind(this)
  }

  getElementItem(item){
    if (item) {
      return <li className="thumbnail list-group-item text-center">
        {item}
      </li>
    }
  }

  requestButtonClass(book){
    let className = "btn btn-default"
    let bookState = this.props.bookState
    if(bookState &&
        bookState.state == "pending" && bookState.book_id == book.id ) {
      className = "btn btn-warning"
    }
    return className
  }

  handleBookRequestClick() {
    this.props.requestBook(this.props.book)
  }

  render() {
    const { book } = this.props
    return (
      <div className="col-sm-4">
          { book != undefined &&
            <div className="panel panel-default clearfix ">
                <div className="panel-heading text-center">
                  <h5 className="thumbnail-heading">{ book.title } </h5>
                </div>
                <div className="panel-body">
                  <div className="list-group">
                    { this.getElementItem(book.language) }
                    { this.getElementItem(book.category_name) }
                    { this.getElementItem(book.author_name) }
                    { this.getElementItem(book.account_city) }
                  </div>
                </div>
                <div className="panel-footer stick-panel text-right">
                  <a href="#" className={this.requestButtonClass(book)} onClick={this.handleBookRequestClick} role="button">Request</a>
                </div>
            </div>
        }
      </div>
    )
  }
}
module.exports = Thumbnail
