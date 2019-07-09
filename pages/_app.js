import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/tag'
import createScope from 'mdx-provider-components'

const components = createScope()

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title key="title">honky tonkin'</title>
    </Head>
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  </div>
)

export default App
