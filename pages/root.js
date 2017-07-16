const html = require('choo/html')
const Body = require('../components/Body')

module.exports = function indexView (state, emit) {
  const children = html`
    <section class="section index">
      <div id="player"></div>
      <script>
        var tag = document.createElement('script')
        tag.src = 'http://www.youtube.com/iframe_api'
        var firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

        var honkyTonks = [
          'kN17OTQIGqg',
          'Q6gUnFZsDjc',
          'KHEQi25GSNo'
        ]

        function onYouTubeIframeAPIReady () {
          const player = new YT.Player('player', {
            videoId: honkyTonks[Math.floor(Math.random() * honkyTonks.length)],
            events: {
              'onReady': function onPlayerReady (e) {
                player.setPlaybackRate(0.33)
              }
            }
          })
        }
      </script>
    </section>
  `

  return Body({ children })
}
