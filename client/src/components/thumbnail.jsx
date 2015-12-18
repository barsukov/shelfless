import React, { Component, PropTypes } from 'react'
var url = require("file!../images/thumb.jpg");
class Thumbnail extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { book } = this.props
    return (
      <div className="col-sm-4">
          { book != undefined &&
            <div className="panel panel-default clearfix ">
                <div className="panel-heading">
                  <h3>{ book.title } </h3>
                </div>
                <div className="panel-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="col-mid-3">
                          <h6>Author:</h6>
                        </td>
                        <td  className="col-mid-3">
                          <h6>{book.author_name}</h6>
                        </td>
                      </tr>
                      <tr>
                        <td className="col-mid-3">
                          <h6>Category:</h6>
                        </td>
                        <td  className="col-mid-3">
                            <h6>{book.category_name}</h6>
                        </td>
                      </tr>
                      <tr>
                        <td className="col-mid-3">
                          <h6>City:</h6>
                        </td>
                        <td  className="col-mid-3">
                            <h6>{book.account_city}</h6>
                        </td>
                      </tr>
                      <tr>
                        <td className="col-mid-3">
                          <h6>Language:</h6>
                        </td>
                        <td  className="col-mid-3">
                            <h6>{book.language}</h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="footer stick-panel">
                  <p><a href="#" className="btn btn-primary" role="button">Request</a></p>
                </div>

            </div>
        }
      </div>
    )
  }
}
module.exports = Thumbnail
