import React, { Component, PropTypes } from 'react'
class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {serachtTerm: ""};
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(e) {
    this.setState({serachtTerm: e.target.value});
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-8">
          <div className="panel panel-default">
            <div className="panel-body">
                <form className="form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="col-md-10">
                      <input type="text" onChange={this.handleTextChange}
                        className="form-control" value={this.state.serachtTerm}
                        placeholder="Title / Category / Author / City / Language" />
                    </div>
                    <div className="col-md-2">
                      <button className="btn btn-primary" type="button">Go!</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
        <div className="col-lg-2" />
      </div>
    )
  }
}
module.exports = SearchBar
