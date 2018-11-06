import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <footer className="Footer">
    <hr />
    <nav>
      <ul className="list pl0 flex-ns mb0 mt0 lh-copy">
        <li className="mr3-ns mb2 mb0-ns">
          <a
            href="https://tat.honkytonk.in"
            target="_blank"
            className="link blue hover-dark-blue"
          >
            Trans America Trail
          </a>
        </li>
        <li className="mr3-ns mb0">
          <a
            href="https://strategies.honkytonk.in"
            target="_blank"
            className="link blue hover-dark-blue"
          >
            Oblique Strategies
          </a>
        </li>
      </ul>
    </nav>
  </footer>
)

export default Footer
