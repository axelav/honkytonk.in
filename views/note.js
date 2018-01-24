const html = require('choo/html')

const Body = require('../components/Body')
const format = require('../lib/format')
const localeDate = require('../lib/locale-date')

module.exports = function noteView (state, emit) {
  const {
    notes = [],
    params,
    title,
    events
  } = state

  const note = notes.find(n => n.slug === params.slug) || {}

  // TODO how to handle no note?
  if (!note) {
    // emit(events.PUSHSTATE, '/404')
    return html`<body><a onclick=${() => emit(events.PUSHSTATE, '/404')}>NOPE</a></body>`
  }

  const TITLE = `${note.title} - Honky Tonkin'`
  if (title !== TITLE) {
    emit(events.DOMTITLECHANGE, TITLE)
  }

  const frag = format(note.html)

  const children = html`
    <article class="note">
      <header>
        <h2 class="f2 mb5 mt0 lh-title">${note.title}</h2>
      </header>
      ${frag}
      <time class="gray f5">${localeDate(note.date)}</time>
    </article>
  `

  return Body({ children })
}
