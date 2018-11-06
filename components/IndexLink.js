import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

// TODO make this a package?
const IndexLink = ({ href, text, date }) => (
  <div className="IndexLink flex justify-between mb2 lh-copy">
    <Link prefetch href={href}>
      <a className="link blue hover-dark-blue">{text}</a>
    </Link>{' '}
    <div className="light-silver tab-num">{date}</div>
  </div>
)

IndexLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default IndexLink
