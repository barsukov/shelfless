import React, { Component, PropTypes } from 'react'
import SearchForm from './search_form'
class SearchBar extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-8">
          <div className="panel panel-default">
            <div className="panel-body">
              <SearchForm submitSearch={this.props.submitSearch}/>
            </div>
          </div>
        </div>
        <div className="col-lg-2" />
      </div>
    )
  }
}
module.exports = SearchBar
