export const ADD_ITEM = 'ADD_ITEM';

export function addTableItem(item) {
  return { type: ADD_ITEM, item }
}

module.exports = addTableItem
