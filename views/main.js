const html = require('choo/html')
const Body = require('../components/Body')
const YouTubePlayer = require('youtube-player')

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
      <div id="player" onload=${el => loadPlayer(el, videoId)}></div>
    </article>
  `

  // TODO how to pull loadPlayer out as a `script` when server rendered?
  function loadPlayer(el, videoId) {
    const player = YouTubePlayer(el)
    player.cueVideoById(videoId)
    player.setPlaybackRate(0.33)
  }

  return Body({ children })
}
