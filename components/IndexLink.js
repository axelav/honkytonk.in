import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const IndexLink = ({ href, textLeft, textRight }) => (
  <div className="IndexLink flex-ns justify-between-ns mb2 lh-copy tab-nums">
    <Link href={href}>
      <a className="db link blue hover-dark-blue">{textLeft}</a>
    </Link>
    {textRight && <div className="light-silver">{textRight}</div>}
  </div>
)

IndexLink.propTypes = {
  href: PropTypes.string.isRequired,
  textLeft: PropTypes.string.isRequired,
  textRight: PropTypes.string
}

export default IndexLink
