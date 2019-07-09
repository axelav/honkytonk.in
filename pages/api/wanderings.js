const data = require('./wanderings-data.json')

module.exports = (req, res) => {
  res.json(data)
}
