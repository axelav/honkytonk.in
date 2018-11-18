import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
// TODO router = undefined ??
// import { withRouter } from 'next/router'
import { Subheading } from 'mdx-provider-components'
import Layout from './Layout'

const TATLayout = props => {
  console.log(props)
  return (
    <Layout>
      <Link prefetch href="/trips/trans-america-trail">
        <a className="db link near-black hover-gray">
          <Subheading>Trans America Trail</Subheading>
        </a>
      </Link>
      {props.children}
    </Layout>
  )
}

TATLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default TATLayout
