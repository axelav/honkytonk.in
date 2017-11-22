require('dotenv').config()
const choo = require('choo')
const css = require('sheetify')
const scrollToTop = require('choo-scroll-to-top')
const createInitialState = require('./lib/create-initial-state')
const data = require('./data.json')

css('tachyons')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-service-worker/clear')())
}

app.use(require('choo-service-worker')())

app.use(createInitialState(data))
app.use(scrollToTop)

app.route('/', require('./views/main'))
app.route('/about', require('./views/page'))
app.route('/future', require('./views/page'))
app.route('/learned', require('./views/page'))
app.route('/library', require('./views/page'))
app.route('/notes', require('./views/notes'))
app.route('/notes/:slug', require('./views/note'))
app.route('/*', require('./views/404'))

if (!module.parent) {
  app.mount('body')
} else {
  module.exports = app
}
