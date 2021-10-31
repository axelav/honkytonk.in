import React, { useState, useMemo, createContext } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import createScope from '../components/provider'
import Analytics from '../components/Analytics'
import '../style.css'

const components = createScope()

const EventsContext = createContext({
  events: [],
  setEvents: () => {},
})

const App = ({ Component, pageProps }) => {
  const [events, setEvents] = useState([])
  const value = useMemo(() => ({ events, setEvents }), [events])

  return (
    <div className="App">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title key="title">honky tonkin'</title>
        <script
          defer
          data-domain="honkytonk.in"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      <MDXProvider components={components}>
        <EventsContext.Provider value={value}>
          <Component {...pageProps} />
          <Analytics />
        </EventsContext.Provider>
      </MDXProvider>
    </div>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
}

export { App as default, EventsContext }
