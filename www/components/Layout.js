import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
// import Footer from './Footer'
import '../style.css'

const Layout = ({ children }) => (
  <div className="Layout sans-serif near-black f5 mw7-ns mt4 mb7 center ph2 ph4-m ph0-l">
    <Header />
    {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
