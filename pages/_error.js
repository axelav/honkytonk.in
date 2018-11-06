import React from 'react'
import Link from 'next/link'
import { Heading } from 'mdx-provider-components'
import '../style.css'

const Error = () => (
  <div className="Error sans-serif near-black f5 mw7-ns mt4 mt4-ns mb7 center ph2 ph4-m ph0-l tc">
    <Heading>That doesn't exist.</Heading>
    <Link prefetch href="/">
      <a className="link blue hover-dark-blue">Go to index &rarr;</a>
    </Link>
  </div>
)

export default Error
