function parseJSON(response) {
  return response.json()
}

function fetchData(url) {
  return fetch(url, {credentials: 'same-origin'}).then(parseJSON)
    .then(function(json) {
      return json
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
}
module.exports = fetchData
