const choo = require('choo')
const css = require('sheetify')
const data = require('./data.json')

css('tachyons')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-log')())
  // app.use(require('choo-service-worker/clear')())
}

// app.use(require('choo-service-worker')())

function createInitialState (state) {
  state.notes = data.filter(x => x.type === 'note').sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
  state.pages = data.filter(x => x.type === 'page')
}

app.use(createInitialState)

app.route('/', require('./views/main'))
app.route('/about', require('./views/page'))
app.route('/future', require('./views/page'))
app.route('/library', require('./views/page'))
app.route('/notes', require('./views/notes'))
app.route('/notes/:slug', require('./views/note'))
app.route('/*', require('./views/404'))

if (!module.parent) {
  app.mount('body')
} else {
  module.exports = app
}
