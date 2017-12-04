const html = require('choo/html')
const Nav = require('./Nav')
const Link = require('./Link')

module.exports = function Header () {
  // TODO this may be the only thing really necessary here
  const children = html`<h1>Honky Tonkin'</h1>`

  return html`
    <header class="header mb5">
      ${Link({
        href: '/',
        styles: 'dn',
        children
      })}
      ${Nav()}
    </header>
  `
}
