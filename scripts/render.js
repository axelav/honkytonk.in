const fs = require('fs-extra')
const path = require('path')
const mkdirp = require('mkdirp')
const createHTML = require('create-html')

const app = require('../index')

const DEFAULT_ROUTES = [
  {
    name: 'index',
    slug: null,
    title: null,
    type: null
  }, {
    name: 'notes',
    slug: 'notes',
    title: 'Notes',
    type: null
  }
]

const data = [...DEFAULT_ROUTES, ...require('../data.json')]

writeFiles(data.map(render))
// process.exit(0) // TODO can't do this cuz writeFiles is async right now

function render ({ slug, title, type }) {
  const head = `
    <meta name="description" content="dumb shit">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  `
  const urlFrag = `${(type === 'note') ? '/notes/' : '/'}${slug || ''}`
  const filename = path.join(process.cwd(), 'dist', urlFrag, 'index.html')
  const html = createHTML({
    title,
    // script: 'bundle.js',
    // scriptAsync: true,
    // favicon: 'favicon.png',
    css: `${process.env.HOST}/bundle.css`, // TODO inline?
    head,
    body: app.toString(urlFrag, app.state)
  })

  return {
    filename,
    html
  }
}

function writeFiles (data) {
  const dist = path.join(process.cwd(), 'dist', 'notes')
  mkdirp.sync(dist)

  data.map(page => {
    const writePath = page.filename.replace(/\/index\.html$/, '')
    mkdirp.sync(writePath)
    fs.writeFile(page.filename, page.html, err => {
      if (err) throw err

      console.log(`writing ${page.filename}`)
    })
  })
}
