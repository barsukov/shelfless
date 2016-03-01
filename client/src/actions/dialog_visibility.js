export const SHOW_DIALOG = 'SHOW_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'

export function showDialog(message, alertClass, title) {
  return { type: SHOW_DIALOG, message, alertClass, title }
}

export function closeDialog() {
  return { type: CLOSE_DIALOG }
}
