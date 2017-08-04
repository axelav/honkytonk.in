const html = require('choo/html')
const Link = require('./Link')

module.exports = function Nav () {
  return html`
    <nav class="nav">
      <ul class="list pl0 flex-ns mb0 mt0">
        <li class="mr3-ns mb1 mb0-ns">
          ${Link({ href: '/', text: 'Honky Tonkin\'' })}
        </li>
        <li class="mr3-ns mb1 mb0-ns">
          ${Link({ href: '/notes', text: 'Notes' })}
        </li>
        <li>
          ${Link({ href: '/about', text: 'About' })}
        </li>
      </ul>
    </nav>
  `
}
