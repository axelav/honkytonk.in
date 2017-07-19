const html = require('choo/html')
const Body = require('../components/Body')
const Link = require('../components/Link')

function Item (note) {
  const localeDate = new Date(note.date).toLocaleString()

  return html`
    <li class="mb2">
      <span>
        ${Link({ href: `/notes/${note.slug}`, text: note.title })}
      </span>
    </li>
  `
}

module.exports = function archiveView (state, emit) {
  const children = html`
    <section class="section notes">
      <ul class="list pl0 mb3 mt0">
        ${state.notes.map(note => Item(note))}
      </ul>
    </section>
  `

  return Body({ children })
}
