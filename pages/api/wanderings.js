const data2018 = require('./wanderings-data.json')
const data2019 = require('./wanderings-data-2019.json')

module.exports = (req, res) => {
  // TODO how to get this to work?
  // https://zeit.co/docs/v2/deployments/concepts/cdn-and-global-distribution/#smart-cdn
  res.setHeader('Cache-Control', 's-maxage=31536000, max-age=0')
  res.json(data2018)
}
