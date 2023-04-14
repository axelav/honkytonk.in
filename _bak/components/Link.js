import React from 'react'
import PropTypes from 'prop-types'
import { default as NextLink } from 'next/link'
import Event from './Event'

const Link = ({ href, children, logEvent }) => {
  return (
    <span onClick={() => logEvent(href, { type: 'CLICK' })}>
      <NextLink href={href}>{children}</NextLink>
    </span>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  logEvent: PropTypes.func.isRequired,
}

export default Event(Link)
