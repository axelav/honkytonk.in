const html = require('choo/html')
const Link = require('./Link')

module.exports = function Footer () {
  // TODO dont use margin-top
  return html`
    <footer class="footer mb5">
      <ul class="list pl0 flex mb0 mt0">
        <li class="mr3">
          ${Link({ href: '/library', text: 'Library' })}
        </li>
        <li class="mr3">
          ${Link({ href: '/future', text: 'Future' })}
        </li>
        <li class="mr3">
          ${Link({ href: '/learned', text: 'Learned' })}
        </li>
        <li>
          ${Link({ href: '/about', text: 'About' })}
        </li>
      </ul>
    </footer>
  `
}

