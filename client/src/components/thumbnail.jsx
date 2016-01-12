import React, { Component, PropTypes } from 'react'
class Thumbnail extends Component {
  constructor(props){
    super(props)
  }

  getBookInformationString(book){
    return book.author_name + book.author_name +
      book.cate + book.account_city

  }
  getElementItem(item){
    if (item) {
      return <li className="thumbnail list-group-item text-center">
        {item}
      </li>
    }
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
                  <a href="#" className="btn btn-default" role="button">Request</a>
                </div>
            </div>
        }
      </div>
    )
  }
}
module.exports = Thumbnail
