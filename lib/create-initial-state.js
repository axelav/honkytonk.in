module.exports = function createInitialState (data) {
  return state => {
    state.notes = data.filter(x => x.type === 'note').sort((a, b) => {
      if (a.date > b.date) return -1
      if (a.date < b.date) return 1
      return 0
    })
    state.pages = data.filter(x => x.type === 'page')
  }
}
