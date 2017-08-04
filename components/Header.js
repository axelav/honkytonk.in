const html = require('choo/html')
const Nav = require('./Nav')
const Link = require('./Link')

module.exports = function Header () {
  return html`
    <header class="header mb7-l mb5">
      ${Link({
        href: '/',
        text: 'Honky Tonkin\'',
        tag: 'h1',
        styles: 'dn'
      })}
      ${Nav()}
    </header>
  `
}
