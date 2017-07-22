const html = require('choo/html')
const Body = require('../components/Body')
const YouTubePlayer = require('youtube-player')

module.exports = function indexView (state, emit) {
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
    <section class="section index">
      <div id="player" onload=${el => loadPlayer(el, videoId)}></div>
    </section>
  `

  function loadPlayer(el, videoId) {
    const player = YouTubePlayer(el)
    player.cueVideoById(videoId)
    player.setPlaybackRate(0.33)
  }

  return Body({ children })
}
