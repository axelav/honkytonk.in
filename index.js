const choo = require('choo')
const css = require('sheetify')
const { notes } = require('./data.json')

css('tachyons')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-log')())
  // app.use(require('choo-service-worker/clear')())
}

// app.use(require('choo-service-worker')())

function createInitialState (state) {
  state.notes = notes
}

app.use(createInitialState)

app.route('/', require('./views/main'))
app.route('/notes', require('./views/notes'))
app.route('/notes/:slug', require('./views/note'))
app.route('/about', require('./views/about'))
app.route('/*', require('./views/404'))

if (!module.parent) {
  app.mount('body')
} else {
  module.exports = app
}
