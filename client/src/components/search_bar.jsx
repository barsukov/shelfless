import React, { Component, PropTypes } from 'react'
class SearchBar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search for..." />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
module.exports = SearchBar
