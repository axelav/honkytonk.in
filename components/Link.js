const html = require('choo/html')

module.exports = function Link (props) {
  const {
    href,
    text
  } = props

  return html`
    <a href="${href}" class="link blue hover-orange">${text}</a>
  `
}
