import { postRequest } from './api_request_layer'

function requestBook(url, body) {
  return postRequest(url, body)
}
module.exports = requestBook
