const choo = require('choo')
const css = require('sheetify')
const { notes } = require('./data.json')

css('tachyons')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-log')())
}

function createInitialState (state) {
  state.notes = notes
}

app.use(createInitialState)

app.route('/', require('./pages/root'))
app.route('/notes', require('./pages/notes'))
app.route('/:slug', require('./pages/note'))

if (!module.parent) {
  app.mount('body')
} else {
  module.exports = app
}
