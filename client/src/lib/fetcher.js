import { getRequest, postRequest } from './api_request_layer'

export function fetchData(page) {
  let url = `api/v1/books.json?page=${page}`
  return getRequest(url)
}

export function searchRequest(searchTerm, page) {
  let body = JSON.stringify({search_term: searchTerm, page: page})
  let url = `/api/v1/books/search`
  return postRequest(url, body)
}
