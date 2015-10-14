var addTableItemAction = require('../actions/add_table_item')

export function addTableItem(state, action) {
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
