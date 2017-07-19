const html = require('choo/html')
const assert = require('assert')
const Header = require('./Header')
const Nav = require('./Nav')

module.exports = function Body (props) {
  assert.equal(typeof props, 'object', 'honkytonk.in: props should be type object')

  const { children } = props
  return html`
    <body class="mw8 ph2 mb6 center lh-solid f5 f4-m f3-l system-sans-serif">
      ${Header()}
      ${Nav()}
      ${children}
    </body>
  `
}
