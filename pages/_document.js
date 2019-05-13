import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render () {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content='' />
          <meta name='author' content='Evan Krambuhl' />
          <meta name='apple-mobile-web-app-title' content='' />

          { /* Twitter card */ }
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content='' />
          <meta name='twitter:description' content='' />
          <meta name='twitter:site' content='@eeveekreevee' />
          <meta name='twitter:creator' content='@eeveekreevee' />
          <meta name='twitter:image' content='' />

          { /* Open Graph */ }
          <meta property='og:url' content='' />
          <meta property='og:title' content='' />
          <meta property='og:description' content='' />
          <meta property='og:image' content='' />

          { /* PWA tags */ }
          <meta name='theme-color' content='#000000' />
          <link rel='manifest' href='/static/manifest/manifest.json' />

          { /* Fonts */ }
          <link rel='preconnect' href='https://use.typekit.net' />
          <link rel='stylesheet' href='https://use.typekit.net/mjq6pdx.css' crossOrigin='' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
