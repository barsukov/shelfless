export const ERROR_ACTION = 'ERROR_ACTION'
export const CLOSE_ERROR = 'CLOSE_ERROR'

export function errorAction(message) {
  return {
    type: ERROR_ACTION,
    message: "Sorry something going wrong with the server, please try again later"
  }
}
export function closeError() {
  return { type: CLOSE_ERROR }
}
