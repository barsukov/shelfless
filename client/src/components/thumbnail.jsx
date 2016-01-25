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

  _getStateClassForElement(book, baseClass) {
    let bookState = this.props.bookState
    if(this.props.requested) {
      baseClass += "disabled"
    }
    return baseClass
  }

  panelThumbClass(book){
    let className = "panel panel-default clearfix "
    return this._getStateClassForElement(book, className)
  }

  requestButtonClass(book){
    let className = "btn btn-default "
    return this._getStateClassForElement(book, className)
  }

  handleBookRequestClick() {
    this.props.requestBook(this.props.book)
  }

  render() {
    const { book } = this.props
    return (
      <div className="col-sm-4">
          { book != undefined &&
            <div className={this.panelThumbClass(book)}>
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
