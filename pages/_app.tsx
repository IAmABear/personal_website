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
        <meta name="description" content="Floyd van Boksel" />
        <meta name="robots" content="nofollow" />

        <meta name="theme-color" content="#FFFFFF" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
