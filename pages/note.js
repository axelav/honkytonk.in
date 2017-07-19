const html = require('choo/html')
const css = require('sheetify')
const assert = require('assert')
const Body = require('../components/Body')

module.exports = function noteView (state, emit) {
  const note = state.notes.find(n => n.slug === state.params.slug)

  assert.equal(typeof note, 'object',  'honkytonkin:pages/note: note should be type object')

  // measure
  const noteStyles = css`
    :host p {
      margin: 0 0 1rem;
    }

    :host > p {
      max-width: 30em;
    }

    :host blockquote {
      margin: 2rem 4rem;
    }

    :host img {
      display: block;
      margin-bottom: 1rem;
      width: 100%;
    }

    :host ul,
    :host ol {
      margin-top: 0;
      margin-bottom: 1rem;
      padding-left: 0;
    }

    :host table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  `

  const el = document.createElement('div')
  el.className = `athelas lh-copy ${noteStyles}`
  el.innerHTML = note.html

  const localeDate = new Date(note.date).toLocaleString()

  const children = html`
    <section class="section note">
      <article>
        <header>
          <h2 class="athelas">${note.title}</h1>
        </header>
        ${el}
        <time class="gray">${localeDate}</time>
      </article>
    </section>
  `

  return Body({ children })
}
