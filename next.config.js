const withCSS = require('@zeit/next-css')
const images = require('remark-images')
const emoji = require('remark-emoji')

const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji]
  }
})

module.exports = withCSS(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    target: 'serverless'
  })
)
