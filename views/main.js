const html = require('choo/html')
const Body = require('../components/Body')
const YoutubeComponent = require('youtube-component')

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
  const player = new YoutubeComponent({
    attr: {
      width: 640,
      height: 360
    }
  })

  const children = html`
    <article class="root">
      ${player.render(`https://www.youtube.com/watch?v=${videoId}`)}
    </article>
  `

  return Body({ children })
}
