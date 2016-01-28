import { getRequest, postRequest } from './api_request_layer'

export function fetchData(url) {
  return getRequest(url)
}

export function searchRequest(searchTerm) {
  let body = JSON.stringify({search_term: searchTerm})
  let url = `/api/v1/books/search`
  return postRequest(url, body)
}
