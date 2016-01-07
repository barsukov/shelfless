import React, { Component, PropTypes } from 'react'
const {Table, Column, Cell} = require('fixed-data-table');
require('../../styles/fixed-data-table.css')

class CusetomCell extends React.Component {
  render() {
    var {rowIndex, data, field} = this.props
    return (
      <a href="#" >
        <Cell className="my-class" {...this.props}>
          {data[rowIndex][field]}
        </Cell>
      </a>
    );
  }
}

class BasicTable extends Component {
  constructor(props){
    super(props)
    this.rowClick = this.rowClick.bind(this)
    this.rowGetter = this.rowGetter.bind(this)
    this.rowClassNameGetter = this.rowClassNameGetter.bind(this)
  }
  rowClassNameGetter(e, sel){
    return "list-group"
  }
  scrollEnd(e, sel){
    console.log("end")
  }
  rowClick(e, el){
    this.props.handleBookClick(this.rowGetter(el))
  }
  rowGetter(rowIndex) {
    return this.props.books[rowIndex];
  }
  render() {
    return (
      <Table
        rowHeight={50}
        onRowClick={this.rowClick}
        rowsCount={this.props.books.length}
        width={750}
        onScrollEnd={this.scrollEnd}
        height={800}
        rowClassNameGetter={this.rowClassNameGetter}
        headerHeight={50}>
          <Column
            header={<Cell>Title</Cell>}
            cell={<CusetomCell data={this.props.books} field="title" />}
            width={200}
          />
          <Column
            header={<Cell>Author</Cell>}
            cell={<CusetomCell data={this.props.books} field="author_name" />}
            width={200}
          />
          <Column
            header={<Cell>Category</Cell>}
            cell={<CusetomCell data={this.props.books} field="category_name" />}
            width={200}
          />
          <Column
            header={<Cell>City</Cell>}
            cell={<CusetomCell data={this.props.books} field="account_city" />}
            width={200}
          />
          <Column
            header={<Cell>Language</Cell>}
            cell={<CusetomCell data={this.props.books} field="language" />}
            width={200}
          />
      </Table>
    );
  }
}
module.exports = BasicTable
