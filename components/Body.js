const html = require('choo/html')
const css = require('sheetify')
const Header = require('./Header')
const Footer = require('./Footer')

module.exports = function Body (props) {
  const styles = css`
    :host {
      text-rendering: optimizeLegibility;
    }

    iframe {
      max-width: 100%;
    }
  `

  const hour = new Date().getHours()
  const className = hour <= 6 || hour >= 18 ? 'dark' : 'light'

  const { children } = props
  return html`
    <body class="mw7 ph3 mt5 mb5 ph0-l center lh-solid f5 f4-m f3-l sans-serif ${styles} ${className}">
      ${Header()}
      <main class="mb5">
        ${children}
      </main>
      ${Footer()}
    </body>
  `
}
