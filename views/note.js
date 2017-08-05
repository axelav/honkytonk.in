const html = require('choo/html')
const css = require('sheetify')

const Body = require('../components/Body')
const format = require('../lib/format')
const localeDate = require('../lib/locale-date')

module.exports = function noteView (state, emit) {
  const note = state.notes.find(n => n.slug === state.params.slug)


  const TITLE = `${note.title} - Honky Tonkin'`
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  const frag = format(note.html)


  const children = html`
    <article class="note">
      <header>
        <h2 class="f2 mb7-l mb5 mt0 lh-title">${note.title}</h2>
      </header>
      ${frag}
      <time class="gray">${localeDate(note.date)}</time>
    </article>
  `

  return Body({ children })
}
