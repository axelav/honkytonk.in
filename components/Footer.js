const html = require('choo/html')
const Link = require('./Link')

module.exports = function Footer () {
  return html`
    <footer class="footer mb5">
      <ul class="list pl0 flex-ns mb0 mt0">
        <li class="mr3-ns mb1 mb0-ns">
          ${Link({ href: '/library', text: 'Library' })}
        </li>
        <li class="mr3-ns mb1 mb0-ns">
          ${Link({ href: '/future', text: 'Future' })}
        </li>
        <li>
          ${Link({ href: '/learned', text: 'Learned' })}
        </li>
      </ul>
    </footer>
  `
}

