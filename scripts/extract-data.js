const fs = require('fs-extra')
const recursive = require('recursive-readdir')
const metaMarked = require('meta-marked')
const async = require('async')
const slugify = require('slugify')
const Minimize = require('minimize')

// TODO: smart links in headers? is this necessary?
// const renderer = new marked.Renderer()
const minimize = new Minimize()

const src = __dirname + '/../notes'
const ignore = ['trips'] // ignore `trips` for now

// renderer.heading = (text, level) => {
//   const linkableText = slugify(text.replace(/<.+>.*<\/.+>/, '').trim())
//   const atag = '<a name="' + linkableText + '" class="anchor" href="#' + linkableText + '">'
//   return atag + '<h' + level + '><span class="header-link"></span>' + text + '</h' + level + '></a>'
// }

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

// function stripMarkdownMetadata (text) {
//   return text.slice(text.indexOf('...') + 3).trim()
// }

function parseFiles (err, files) {
  if (err) console.error(err)

  async.map(files, (file, cb) => {
    console.log(`parsing ${file}`)

    const contents = fs.readFileSync(file, 'utf8')
    // const markdown = stripMarkdownMetadata(contents)

    const parsed = metaMarked(contents)
    const url = '/notes/' + parsed.meta.slug

    minimize.parse(parsed.html, (err, html) => {
      if (err) throw err

      const result = {
        url,
        html,
        title: parsed.meta.title,
        markdown: parsed.markdown,
        startingFilename: file,
        outputFile: `${url}.html`,
        date: parsed.meta.date
      }

      cb(null, result)
    })
  }, writeJSON)
}
