const data = require('./data.json')
const json = JSON.stringify(data)

module.exports = (req, res) => {
  res.setHeader('content-type', 'application/json')
  res.end(json)
}
