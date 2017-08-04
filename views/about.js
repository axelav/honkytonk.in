const html = require('choo/html')
const Body = require('../components/Body')

module.exports = function aboutView (state, emit) {
  const TITLE = 'About - Honky Tonkin\''
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  const children = html`
    <article class="about">
      <h2>About</h2>
    </article>
  `

  return Body({ children })
}
