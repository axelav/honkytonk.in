import React from 'react'
import Link from 'next/link'
import { Heading } from 'mdx-provider-components'

const Header = () => (
  <div className="Header">
    <Link prefetch href="/">
      <a className="db link near-black hover-gray">
        <Heading>Honky Tonkin'</Heading>
      </a>
    </Link>
    <nav>
      <ul className="list pl0 flex-ns mb0 mt0 lh-copy">
        <li className="mr3-ns mb1 mb0-ns">
          <Link prefetch href="/notes">
            <a className="link blue hover-dark-blue">Notes</a>
          </Link>
        </li>
        <li className="mr3-ns mb1 mb0-ns">
          <Link prefetch href="/library">
            <a className="link blue hover-dark-blue">Library</a>
          </Link>
        </li>
        <li className="mr3-ns mb1 mb0-ns">
          <Link prefetch href="/future">
            <a className="link blue hover-dark-blue">Future</a>
          </Link>
        </li>
        <li className="mr3-ns mb0">
          <Link prefetch href="/about">
            <a className="link blue hover-dark-blue">About</a>
          </Link>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
)

export default Header
