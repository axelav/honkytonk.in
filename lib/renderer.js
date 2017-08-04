const classNames = require('classnames')
const marked = require('marked');
const renderer = new marked.Renderer();

renderer.blockquote = function renderBlockquote (text) {
  return `<blockquote class="i ma5 measure">${text}</blockquote>`
}

renderer.heading = function renderHeading (text, level) {
  const classes = classNames('mt0', {
    mb3: level >= 2,
    mb3: level >= 3
  })

  return `<h${level} class="${classes}">${text}</h${level}>`
}

renderer.list = function renderList (body, ordered) {
  const listType = ordered ? 'ol' : 'ul'

  return `<${listType} class="mt0 mb3 pl5">${body}</${listType}>`
}

renderer.paragraph = function renderParagraph (text) {
  return `<p class="mt0 mb3">${text}</p>`
}

renderer.table = function renderTable (header, body) {
  return `<table class="collapse"><thead>${header}</thead><tbody>${body}</body></table>`
}

renderer.link = function renderLink (href, title, text) {
  return `<a href="${href}" title="${title}" class="link blue hover-red">${text}</a>`
}

renderer.image = function renderLink (href, title, text) {
  return `<img src="${href}" alt="${text}" class="db mb3 w-100"></img>`
}

module.exports = renderer
