// TODO make this a package?
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const DateLink = ({ href, text, date }) => (
  <div className="DateLink flex-l justify-between-l mb2 lh-copy">
    <Link prefetch href={href}>
      <a className="db link blue hover-dark-blue">{text}</a>
    </Link>{' '}
    <div className="light-silver tabular-nums">{date}</div>
  </div>
)

DateLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default DateLink
