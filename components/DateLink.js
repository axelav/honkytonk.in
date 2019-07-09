// TODO make this a package?
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const DateLink = ({ href, text, date }) => (
  <div className="DateLink flex-ns justify-between-ns mb2 lh-copy tab-nums">
    <Link href={href}>
      <a className="db link blue hover-dark-blue">{text}</a>
    </Link>
    {date && <div className="light-silver">{date}</div>}
  </div>
)

DateLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string
}

export default DateLink
