const fs = require('fs-extra')
const path = require('path')
const recursive = require('recursive-readdir')
const metaMarked = require('meta-marked')
const slug = require('slug')
const Minimize = require('minimize')

const renderer = require('../lib/renderer')

const minimize = new Minimize()
slug.defaults.mode = 'rfc3986'

const src = path.join(process.cwd(), 'data')
const ignore = ['trips']

recursive(src, ignore, parseFiles)

function parseFiles (err, files) {
  if (err) throw err

  // TODO how to add / root honkytonk.in to this?
  const result = files.map(file => {
    console.log(`parsing ${file}`)

    const parsed = metaMarked(fs.readFileSync(file, 'utf8'), { renderer })

    return {
      html: minimize.parse(parsed.html),
      slug: slug(parsed.meta.title),
      title: parsed.meta.title,
      markdown: parsed.markdown,
      startingFilename: file,
      outputFile: `${parsed.meta.slug}.html`,
      date: parsed.meta.date,
      type: parsed.meta.type,
      published: !parsed.meta.draft
    }
  }).filter(file => file.published)

  writeJSON(result)
}

function writeJSON (files) {
  const filename = path.join(process.cwd(), 'data.json')

  fs.outputJSON(filename, files, err => {
    if (err) throw err

    console.log(`writing ${filename}`)
    process.exit(0)
  })
}
