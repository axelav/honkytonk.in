const html = require('choo/html')

const Body = require('../components/Body')
const format = require('../lib/format')

module.exports = function pageView (state, emit) {
  const page = state.pages.find(n => `/${n.slug}` === state.route)
  const TITLE = `${page.title} - Honky Tonkin'`

  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  const frag = format(page.html)

  const children = html`
    <article class="page">
      <header>
        <h2 class="f2 mb7-l mb5 mt0 lh-title">${page.title}</h2>
      </header>
      ${frag}
    </article>
  `

  return Body({ children })
}
