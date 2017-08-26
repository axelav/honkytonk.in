module.exports = function localeDate (date) {
  if (!date) return null

  return new Date(date).toLocaleString()
}
