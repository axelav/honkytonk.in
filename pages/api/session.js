module.exports = (req, res) => {
  console.log('REQUEST /session ::\n\n', req.body)
  res.status(201).end()
}
