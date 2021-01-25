import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Header from './Header'

const Layout = ({ children }) => (
  <div className="Layout sans-serif near-black f5">
    <div className="mw7-ns mt4 mb7 center ph2 ph4-m ph0-l">
      <Header />
      {children}
    </div>

    {process.env.NEXT_PUBLIC_SHA && (
      <div className="tr pa4">
        <Link
          href={`https://github.com/axelav/honkytonk.in/commit/${process.env.NEXT_PUBLIC_SHA}`}
        >
          <a
            target="_blank"
            rel="noreferrer"
            className="link near-white hover-moon-gray"
          >
            {process.env.NEXT_PUBLIC_SHA.substr(0, 8)}
          </a>
        </Link>
      </div>
    )}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
