const html = require('choo/html')
const assert = require('assert')

module.exports = function Link (props) {
  const {
    href,
    text,
    children,
    styles = ''
  } = props

  assert.equal(typeof href, 'string', 'Link: href is required and should be type string')

  if (children) {
    return html`
      <a href="${href}" class="link blue hover-red ${styles}">
        ${children}
      </a>
    `
  }

  return html`
    <a href="${href}" class="link blue hover-red">${text}</a>
  `
}
