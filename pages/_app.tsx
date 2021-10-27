import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta lang="en" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
