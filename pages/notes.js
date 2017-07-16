const html = require('choo/html')
const Body = require('../components/Body')

function Item (note) {
  return html`
    <li>
      <a href="${note.url}" class="link underline blue hover-orange">${note.title}</a>
    </li>
  `
}

module.exports = function archiveView (state, emit) {
  const children = html`
    <section class="section archive">
      <ul class="list pl0">
        ${state.notes.map(note => Item(note))}
      </ul>
    </section>
  `

  return Body({ children })
}
