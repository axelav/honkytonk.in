const html = require('choo/html')

const format = require('../lib/format')

module.exports = function Link (props) {
  const {
    href,
    text,
    tag,
    styles
  } = props

  if (tag) {
    const frag = format(text, 'h1')

    return html`
      <a href="${href}" class="link blue hover-red ${styles}">
        ${frag}
      </a>
    `
  }

  return html`
    <a href="${href}" class="link blue hover-red">${text}</a>
  `
}
