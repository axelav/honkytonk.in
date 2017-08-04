const html = require('choo/html')
const Body = require('../components/Body')
const Link = require('../components/Link')

function Item (note) {
  return html`
    <li class="mb2">
      ${Link({ href: `/notes/${note.slug}`, text: note.title })}
    </li>
  `
}

module.exports = function notesView (state, emit) {
  const TITLE = 'Notes - Honky Tonkin\''
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  const children = html`
    <article class="notes">
      <ul class="list pl0 mb0 mt0">
        ${state.notes.map(note => Item(note))}
      </ul>
    </article>
  `

  return Body({ children })
}
