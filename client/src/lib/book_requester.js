function parseJSON(response) {
  return response.json()
}

function requestBook(url, body) {
  return fetch(url, {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body
  }).then((response) => {
    return response.json()
  }).catch((ex) => {
    console.log('parsing failed', ex)
  })
}
module.exports = requestBook
