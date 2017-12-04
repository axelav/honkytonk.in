const html = require('choo/html')

const Body = require('../components/Body')
const format = require('../lib/format')

module.exports = function pageView (state, emit) {
  const {
    pages = [],
    route,
    title,
    events
  } = state

  const page = pages.find(n => `/${n.slug}` === route) || {}
  const TITLE = `${page.title} - Honky Tonkin'`

  if (title !== TITLE) {
    emit(events.DOMTITLECHANGE, TITLE)
  }

  const frag = format(page.html)

  const children = html`
    <article class="page">
      <header>
        <h2 class="f2 mb5 mt0 lh-title">${page.title}</h2>
      </header>
      ${frag}
    </article>
  `

  return Body({ children })
}
