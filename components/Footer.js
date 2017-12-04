const html = require('choo/html')
const Link = require('./Link')

const links = [
  'About',
  'Library',
  'Future'
  // 'Learned'
]

module.exports = function Footer () {
  return html`
    <footer class="footer mb5">
      <ul class="list pl0 flex-ns mb0 mt0">
        ${links.map(text => {
          const href = `/${text.toLowerCase()}`
          return html`
            <li class="mr3-ns mb1 mb0-ns">
              ${Link({ href, text })}
            </li>
          `
        })}
      </ul>
    </footer>
  `
}
