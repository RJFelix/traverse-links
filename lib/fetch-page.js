const request = require('superagent');

const fetchPage = (url) => {
  return request
    .get(url)
    .then(res => { return { url, html: res.text}});
}

module.exports = fetchPage;