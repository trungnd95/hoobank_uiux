import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <meta name="description" content="Hoobank Landing Page" />
            <link rel="icon" href="/assets/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}