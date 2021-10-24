const data = require('./wanderings-data.json')

module.exports = (req, res) => {
  res.status(200).json(data)
}
