const html = require('choo/html')
const Body = require('../components/Body')

module.exports = function rootView (state, emit) {
  const TITLE = 'Honky Tonkin\''
  if (state.title !== TITLE) {
    emit(state.events.DOMTITLECHANGE, TITLE)
  }

  const honkyTonks = [
    'kN17OTQIGqg',
    'Q6gUnFZsDjc',
    'KHEQi25GSNo',
    'BrkLxJqb2xM',
    'q57iYqeY3j0',
    '918TER9fDRQ',
    'Y0r651OMVUw'
  ]

  const videoId = honkyTonks[Math.floor(Math.random() * honkyTonks.length)]

  const children = html`
    <article class="root">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
    </article>
  `

  return Body({ children })
}
