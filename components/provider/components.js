import React from 'react'
import cx from 'classnames'
import { widont } from 'journalize'

const Heading = ({ children, smallMargin }) => {
  const prefix = cx('f2 mt0 lh-title', {
    mb2: smallMargin,
    mb4: !smallMargin,
  })

  return <h1 className={prefix}>{children}</h1>
}

Heading.defaultProps = { smallMargin: false }

const Subheading = ({ children }) => (
  <h2 className="mt0 mb4 lh-title f3">{children}</h2>
)

const Title = ({ children }) => (
  <h3 className="mt0 mb4 lh-title f4">{children}</h3>
)

const Subtitle = ({ children }) => (
  <h4 className="mt0 mb4 lh-title f4 i normal">{children}</h4>
)

const H5 = ({ children }) => <h5 className="mt0 mb4 lh-title f5">{children}</h5>
const H6 = ({ children }) => (
  <h6 className="mt0 mb4 lh-title f5 i normal">{children}</h6>
)

const Text = ({ children }) => {
  if (typeof children === 'string') {
    return <p className="lh-copy mt0 mb4 measure-wide-ns">{widont(children)}</p>
  }

  return <p className="lh-copy mt0 mb4 measure-wide-ns">{children}</p>
}

const Link = ({ children, href }) => (
  <a className="blue hover-dark-blue link" href={href}>
    {children}
  </a>
)

const Image = ({ src }) => <img className="db mw-100 mb4" src={src} />

const Blockquote = ({ children }) => (
  <blockquote className="mt0 mh0 mb4 ph3 i bl b--light-gray">
    {children}
  </blockquote>
)

const Pre = ({ children }) => (
  <pre className="pre bg-near-white pa3 mb4">{children}</pre>
)

const Code = ({ children }) => <code>{children}</code>

// TODO fix padding
const UnorderedList = ({ children }) => (
  <ul className="mt0 mh0 mb4 pl4" style={{ padding: '0 0 0 20px' }}>
    {children}
  </ul>
)

// TODO fix padding
const OrderedList = ({ children }) => (
  <ol className="mt0 mh0 mb4 pl4" style={{ padding: '0 0 0 24px' }}>
    {children}
  </ol>
)

const Item = ({ children }) => <li className="mt0 mb2 lh-copy">{children}</li>

const Table = ({ children }) => (
  <table className="collapse mb4 ba b--light-gray">{children}</table>
)

export {
  Heading,
  Subheading,
  Title,
  Subtitle,
  H5,
  H6,
  Text,
  Link,
  Image,
  Blockquote,
  Pre,
  Code,
  UnorderedList,
  OrderedList,
  Item,
  Table,
}
