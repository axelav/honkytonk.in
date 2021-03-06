import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Subheading } from './provider'
import { DateTime } from 'luxon'
import Layout from './Layout'

const TATLayout = ({ children, prev, next }) => (
  <Layout>
    <div className="mb5">
      <Link href="/places/trans-america-trail">
        <a className="db link near-black hover-gray">
          <Subheading>Trans America Trail</Subheading>
        </a>
      </Link>
      {children}
    </div>
    {(prev || next) && (
      <div className="flex justify-between mb7">
        <div>
          {prev && (
            <Link href={`/places/trans-america-trail/${prev}`}>
              <a className="db link blue hover-dark-blue">
                &laquo;{' '}
                {DateTime.fromISO(prev).toLocaleString(DateTime.DATE_FULL)}
              </a>
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link href={`/places/trans-america-trail/${next}`}>
              <a className="db link blue hover-dark-blue">
                {DateTime.fromISO(next).toLocaleString(DateTime.DATE_FULL)}{' '}
                &raquo;
              </a>
            </Link>
          )}
        </div>
      </div>
    )}
  </Layout>
)

TATLayout.propTypes = {
  children: PropTypes.node.isRequired,
  prev: PropTypes.string,
  next: PropTypes.string,
}

export default TATLayout
