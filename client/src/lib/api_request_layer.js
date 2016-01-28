function parseJSON(response) {
  return response.json()
}

export function getRequest (url) {
  return fetch(url, {credentials: 'include'}).then(parseJSON)
    .then(function(json) {
      return json
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
}

export function postRequest (url, body) {
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
