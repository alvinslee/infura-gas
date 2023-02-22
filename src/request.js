const URL = require('./infuraUrl')
const fetch = require('node-fetch')

const send = async (payload) => {
  const params = {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json'
    }
  }

  return fetch(URL, params)
}

module.exports = {
  send
}
