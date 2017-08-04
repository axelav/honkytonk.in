const html = require('choo/html')
const css = require('sheetify')
const assert = require('assert')

const Body = require('../components/Body')
const format = require('../lib/format')

module.exports = function noteView (state, emit) {
  assert.equal(typeof state.notes, 'object', 'honkytonkin:pages/note: note should be type object')

  const note = state.notes.find(n => n.slug === state.params.slug)

  assert.equal(typeof note, 'object', 'honkytonkin:pages/note: note should be type object')

  const TITLE = `${note.title} - Honky Tonkin'`
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  const frag = format(note.html)

  const localeDate = new Date(note.date).toLocaleString()

  const children = html`
    <article class="note">
      <header>
        <h2 class="f2 mb7-l mb5 mt0">${note.title}</h2>
      </header>
      ${frag}
      <time class="gray">${localeDate}</time>
    </article>
  `

  return Body({ children })
}
