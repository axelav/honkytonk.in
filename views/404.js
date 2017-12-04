const html = require('choo/html')
const Body = require('../components/Body')

module.exports = function notFoundView (state, emit) {
  const TITLE = '404 - Honky Tonkin\''
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  const children = html`
    <article class="404">
      <h1 class="f-headline mb5 mt0">404: Not Found</h1>
    </article>
  `

  return Body({ children })
}
