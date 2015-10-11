var React = require('react');
var FixedDataTable = require('fixed-data-table');
require('../../styles/fixed-data-table.css')
var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

var BasicTable = React.createClass({

  // Table data as a list of array.
  rows:
    [
      ['a1', 'b1'],
      ['a2', 'b2'],
      ['a3', 'b3'],
    ],

  rowGetter(rowIndex) {
    return this.rows[rowIndex];
  },
  render: function () {
    return (
      <Table
        rowHeight={50}
        rowGetter={this.rowGetter}
        rowsCount={this.rows.length}
        width={1000}
        height={500}
        headerHeight={50}>
        <Column
          label="Title"
          width={100}
          dataKey={0}
        />
        <Column
          label="Author"
          width={100}
          dataKey={1}
        />
        <Column
          label="Category"
          width={100}
          dataKey={2}
        />
        <Column
          label="City"
          width={200}
          dataKey={3}
        />
        <Column
          label="Language"
          width={200}
          dataKey={4}
        />
        <Column
          label="Request"
          width={200}
          dataKey={5}
        />
      </Table>
    )
  }
});

module.exports = BasicTable
