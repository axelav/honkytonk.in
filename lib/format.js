const html = require('choo/html')

// https://github.com/shama/bel/issues/84
module.exports = function format (str, styles = 'markdown-container lh-copy mb7-l mb5') {
  let wrapper

  if (typeof window !== 'undefined') {
    wrapper = html`<div></div>`
    wrapper.className = styles
    wrapper.innerHTML = str

    return wrapper
  }

  wrapper = new String(`<div class="${styles}">${str}</div>`)
  wrapper.__encoded = true

  return wrapper
}
