import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/tag'
import createScope from 'mdx-provider-components'

const components = createScope()

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <title key="title">Honky Tonkin'</title>
    </Head>
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  </div>
)

export default App
