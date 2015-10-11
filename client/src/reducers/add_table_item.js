var addTableItemAction = require('../actions/add_table_item')
debugger

export function addTableItem(state, action) {
  debugger
  switch (action.type) {
    case addTableItemAction.ADD_TABLE_ITEM:
      return Object.assign({}, state, {
        viewMode: action.item
      });
    default:
      return state;
  }
}
module.exports = addTableItem
