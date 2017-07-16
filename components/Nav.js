const html = require('choo/html')

module.exports = function Nav () {
  return html`
    <nav class="nav">
      <ul class="list pl0 flex">
        <li class="mr3">
          <a href="/" class="link underline blue hover-orange">Home</a>
        </li>
        <li class="mr3">
          <a href="/notes" class="link underline blue hover-orange">Notes</a>
        </li>
        <li class="mr3">
          <a href="/learned" class="link underline blue hover-orange">Learned</a>
        </li>
      </ul>
    </nav>
  `
}
