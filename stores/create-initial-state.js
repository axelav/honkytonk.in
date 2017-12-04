const data = require('../data.json')

module.exports = function createInitialState (state, emitter) {
  state.notes = data.filter(x => x.type === 'note').sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
  state.pages = data.filter(x => x.type === 'page')

  emitter.emit('render')
}
