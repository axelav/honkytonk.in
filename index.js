const choo = require('choo')
const css = require('sheetify')

css('tachyons')

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-log')())
}

app.route('/', require('./pages/index'))
app.route('/:slug', require('./pages/note'))

if (!module.parent) {
  app.mount('body')
} else {
  module.exports = app
}
