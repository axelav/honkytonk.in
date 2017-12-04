const html = require('choo/html')
const Body = require('../components/Body')
const Link = require('../components/Link')

function Item (note) {
  return html`
    <li>
      ${Link({ href: `/notes/${note.slug}`, text: note.title })}
    </li>
  `
}

module.exports = function notesView (state, emit) {
  const {
    notes = [],
    title,
    events
  } = state

  const TITLE = 'Notes - Honky Tonkin\''
  if (title !== TITLE) {
    emit(events.DOMTITLECHANGE, TITLE)
  }

  const children = html`
    <article class="notes lh-copy">
      <ul class="list mt0 mb0 pl4 pl5-ns">
        ${notes.map(note => Item(note))}
      </ul>
    </article>
  `

  return Body({ children })
}
