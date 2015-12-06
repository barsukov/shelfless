import React, { Component, PropTypes } from 'react'

class BookForm extends Component {
  constructor(props){
    super(props)
  }
  renderTitle(book){
     return (
       <h3>
         {
           book != undefined &&
           book.title || "Please select a book"
         }

       </h3>
     )
  }
  render() {
    const { book } = this.props
    return (
      <div className="panel panel-default new-interface">
        <div className="panel-heading">
          { this.renderTitle(book) }
        </div>
        { book != undefined &&
          <div className="panel-body">
            <div className="list-group">
              <p className="list-group-item-heading">Author:</p>
              <h4 className="list-group-item-text">{book.author_name}</h4>
            </div>
            <div className="list-group">
              <p className="list-group-item-heading">Category:</p>
              <h4 className="list-group-item-text">{book.category_name}</h4>
            </div>
            <div className="list-group">
              <p className="list-group-item-heading">City:</p>
              <h4 className="list-group-item-text">{book.account_city}</h4>
            </div>
            <div className="list-group">
              <p className="list-group-item-heading">Language:</p>
              <h4 className="list-group-item-text">{book.language}</h4>
            </div>
          </div>
        }
      </div>
    )
}
}
module.exports = BookForm
