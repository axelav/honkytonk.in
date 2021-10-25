import React, { Fragment } from 'react'
import Link from '../components/Link'
import { Heading } from './provider'

const Header = () => (
  <Fragment>
    <div className="Header flex-ns items-center-ns justify-between-ns">
      <Heading>
        <Link href="/">
          <a className="db link near-black hover-gray">honky tonkin'</a>
        </Link>
      </Heading>
      <nav className="mb4-ns ml4-ns">
        <ul className="list pl0 flex-ns mb0 mt0 lh-copy">
          <li className="mr3-ns mb1 mb0-ns">
            <Link href="/places">
              <a className="link blue hover-dark-blue">Places</a>
            </Link>
          </li>
          <li className="mr3-ns mb1 mb0-ns">
            <Link href="/notes">
              <a className="link blue hover-dark-blue">Notes</a>
            </Link>
          </li>
          <li className="mr3-ns mb1 mb0-ns">
            <Link href="/library">
              <a className="link blue hover-dark-blue">Library</a>
            </Link>
          </li>
          <li className="mr3-ns mb1 mb0-ns">
            <Link href="/future">
              <a className="link blue hover-dark-blue">Future</a>
            </Link>
          </li>
          <li className="mb0">
            <Link href="/now">
              <a className="link blue hover-dark-blue">Now</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <hr />
    <style jsx>{`
      @media screen and (min-width: 30em) {
        .Header {
          margin-bottom: -2rem;
        }
      }
    `}</style>
  </Fragment>
)

export default Header
