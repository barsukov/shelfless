
export function getCookies() {
  var cookies = {};
  for (let cookie of document.cookie.split('; ')) {
    let [name, value] = cookie.split("=");
    cookies[name] = decodeURIComponent(value);
  }
  return cookies
}

export function getCoockieByName(name) {
  return getCookies()[name]
}
