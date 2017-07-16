const html = require('choo/html')
const Body = require('../components/Body')

module.exports = function noteView (state, emit) {
  const children = html`
    <section class="section note">
      <h1>another view: ${state.params.slug}</h1>
    </section>
  `

  return Body({ children })
}
