const html = require('choo/html')
const Link = require('./Link')

module.exports = function Nav () {
  return html`
    <nav class="nav">
      <ul class="list pl0 flex">
        <li class="mr3">
          ${Link({ href: '/', text: 'Home' })}
        </li>
        <li class="mr3">
          ${Link({ href: '/notes', text: 'Notes' })}
        </li>
        <li class="mr3">
          ${Link({ href: '/learned', text: 'Learned' })}
        </li>
        <li>
          ${Link({ href: '/about', text: 'About' })}
        </li>
      </ul>
    </nav>
  `
}
