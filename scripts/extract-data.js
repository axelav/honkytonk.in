const fs = require('fs-extra')
const recursive = require('recursive-readdir')
const metaMarked = require('meta-marked')
const async = require('async')
const slugify = require('slugify')
const Minimize = require('minimize')

const renderer = require('../lib/renderer')

const minimize = new Minimize()

const src = __dirname + '/../notes'
const ignore = ['trips'] // ignore `trips` for now

recursive(src, ignore, parseFiles)

function writeJSON (err, files) {
  if (err) throw err

  files.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })

  const result = { notes: files }

  const filename = __dirname + '/../data.json'

  fs.outputJSON(filename, result, (err) => {
    if (err) throw err
    console.log(`wrote ${filename}`)
    process.exit(0)
  })
}

function parseFiles (err, files) {
  if (err) console.error(err)

  async.map(files, (file, cb) => {
    console.log(`parsing ${file}`)

    const contents = fs.readFileSync(file, 'utf8')
    const parsed = metaMarked(contents, { renderer })

    minimize.parse(parsed.html, (err, html) => {
      if (err) throw err

      const result = {
        html,
        slug: parsed.meta.slug.toString(),
        title: parsed.meta.title,
        markdown: parsed.markdown,
        startingFilename: file,
        outputFile: `${parsed.meta.slug}.html`,
        date: parsed.meta.date
      }

      cb(null, result)
    })
  }, writeJSON)
}
